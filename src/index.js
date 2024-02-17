import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { SWRConfig } from 'swr';


const HEADER = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_STRAPI_TOKEN}`
  }
}

const HOST = process.env.REACT_APP_HOST_API;
console.log(HOST);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-nf65febdpbxg870d.jp.auth0.com"
        clientId="6kj8m6JrUD1jyjcGXA5Btaf6IiRbJfeH"
        useRefreshTokens={true}
        useRefreshTokensFallback={false}
        authorizationParams={{
          redirect_uri: "com.kasjadi.app://dev-nf65febdpbxg870d.jp.auth0.com/capacitor/com.kasjadi.app/callback"
        }}
      >
        <SWRConfig value={{ refreshInterval: 3000, fetcher: (resource) => fetch(HOST + resource, HEADER).then(res => res.json()) }}>
          <App />
        </SWRConfig>
      </Auth0Provider>
    </Provider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
