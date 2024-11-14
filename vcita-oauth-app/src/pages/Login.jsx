
import React from 'react';

const LoginPage = () => {
  const handleLogin = () => {
    const clientId = "bcbaf8cd30eea62d65a24812529c214b3f32ad29cf0ad1fb9de1680d30ad6aca";
    const redirectUri = "https://my-vcita-playground.web.app/oauth";
    const authUrl = `https://app.vcita.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = authUrl;
  };

  return (
    <div>
      <h1>Login to VCita</h1>
      <button onClick={handleLogin}>Login with VCita</button>
    </div>
  );
};

export default LoginPage;
