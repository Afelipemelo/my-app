import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-e3-dq38c.us.auth0.com' clientId='qEpJdLIcC9YDyeDbs5i7Tkjo0ZtZRtJe' redirectUri={window.location.origin} >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

