import React, { useEffect, useState } from 'react';

const Callback = () => {
  const [accessToken, setAccessToken] = useState('');
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    // POST request for access Authorization token
    fetch('https://api.vcita.biz/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code: code,
        client_id: 'bcbaf8cd30eea62d65a24812529c214b3f32ad29cf0ad1fb9de1680d30ad6aca',
        client_secret: 'ffa0326272bb49d447b5b77168b6e3ffc81fc34abbc6fe08f9c0ea0ea2c58c34',
        redirect_uri: 'https://web-app-vcita.web.app/oauth',
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      setAccessToken(data.access_token);
      fetchClients(data.access_token);
    })
    .catch(error => {
      console.error('Error exchanging code for token:', error.message);
      alert("There was an error during the authentication process.");
    });

  }, []);


  // GET request for listing all the client
  const fetchClients = (token) => {
    setLoading(true);
    fetch('https://api.vcita.biz/platform/v1/clients', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Accept': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      setClients(data.data.clients || []);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching clients:', error);
      setLoading(false);
      alert('Error fetching clients.');
    });
  };



  // POST request for creating new client
  const createClient = () => {
    const newClientData = {
      first_name: `FirstName${Date.now()}`,
      last_name: `LatName${Date.now()}`,
      email: `email${Date.now()}@vcita.com`,
      mobile_phone: '1234567890',
      address: "Jerusalem street",
      created_at: "2024-11-09T12:13:39Z",
      updated_at: "2024-11-09T12:13:39Z",
      customer_status: "lead",
      source: "Initiated by staff",
      business_uid: "ql2flg6i6u4mnz7u",
      tags: [],
    };

    fetch('https://api.vcita.biz/platform/v1/clients', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newClientData),
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(errorData => {
          throw new Error(`Error: ${response.statusText}`);
        });
      }
      return response.json();
    })
    .then(() => {
      alert('Client created successfully');
      fetchClients(accessToken);  // Refresh clients list
    })
    .catch(error => {
      console.error('Error creating client:', error);
      alert('Error creating client.');
    });
  };



  return (
    <div style={{ padding: '20px' }}>
      <h1>OAuth Callback</h1>   
      {accessToken ? (
        <div>
          <h2>Access Token</h2>
          <p>{accessToken}</p>         
          {loading ? (
            <p>Loading clients...</p>
          ) : (
            <div>
              <h3>Clients List</h3>
              <ul>
                {clients.length > 0 ? (
                  clients.map(client => (
                    <li key={client.email}>{client.first_name} {client.last_name}</li>
                  ))
                ) : (
                  <p>No clients found.</p>
                )}
              </ul>
              <button onClick={createClient}>Create New Client</button>
            </div>
          )}
        </div>
      ) : (
        <p>Loading... Please wait.</p>
      )}
    </div>
  );
};

export default Callback;
