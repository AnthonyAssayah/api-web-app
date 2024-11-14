
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CallbackPage = () => {
  const [accessToken, setAccessToken] = useState('');
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      // Exchange the authorization code for an access token
      const clientId = "bcbaf8cd30eea62d65a24812529c214b3f32ad29cf0ad1fb9de1680d30ad6aca";
      const clientSecret = "ffa0326272bb49d447b5b77168b6e3ffc81fc34abbc6fe08f9c0ea0ea2c58c34";
      const redirectUri = "https://my-vcita-playground.web.app/oauth";
      
      axios.post('https://app.vcita.com/oauth/token', {
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      })
      .then(response => {
        const token = response.data.access_token;
        setAccessToken(token);
        // Fetch clients once the token is obtained
        fetchClients(token);
      })
      .catch(error => console.error('Error exchanging code for token:', error));
    }
  }, []);



  return (
    <div>
      <h1>OAuth Callback</h1>
      {accessToken && (
        <div>
          <h2>Access Token</h2>
          <p>{accessToken}</p>
          <h2>Clients List</h2>
          <ul>
            {clients.map(client => (
              <li key={client.id}>{client.name}</li>
            ))}
          </ul>
          <button onClick={createClient}>Create New Client</button>
        </div>
      )}
    </div>
  );
};

export default CallbackPage;
