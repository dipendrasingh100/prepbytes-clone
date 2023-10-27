import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './app/store';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


const root = ReactDOM.createRoot(document.getElementById('root'));
const client = process.env.REACT_APP_PAYPAL_CLIENT_ID
root.render(
  <React.StrictMode>
    <PayPalScriptProvider options={{ "client-id": client, currency: 'USD', intent: "capture" }}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PayPalScriptProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals