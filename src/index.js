import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="372862298908-b2hj1tkd62es5us538qs9r1qekh8auc8.apps.googleusercontent.com"> 
    <App />
    </GoogleOAuthProvider>;
  
  </React.StrictMode>
);


reportWebVitals();
