import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fontello-968c0586/css/fontello.css'
import App from './App';
import axios from "axios";

axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token"); //
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


const { fetch: originalFetch } = window;
window.fetch = async (...args) => {
    let [resource, config] = args;
    const token = localStorage.getItem("token");
    config = config || {};
    if (token) {
        const headers = new Headers(config.headers);
        headers.set("Authorization", `Bearer ${token}`);
        config.headers = headers;
    }
    return originalFetch(resource, config);
};



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

