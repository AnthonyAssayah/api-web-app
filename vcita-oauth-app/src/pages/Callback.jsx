
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CallbackPage = () => {
  const [accessToken, setAccessToken] = useState('');
  const [clients, setClients] = useState([]);


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
