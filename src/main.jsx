import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-h0zkqlx5fg2qpig5.us.auth0.com"
    clientId="q8BuWLQ2eyQejoKerTWgbgz7u3bAGHKC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
 
  <Provider store={store}>
  
    <App />

  </Provider>
  </Auth0Provider>,
  </React.StrictMode>
)
