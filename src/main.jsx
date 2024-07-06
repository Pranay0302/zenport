import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactGA from "react-ga4";


ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
ReactGA.send({ hitType: "pageview", page: window.location.pathname });
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
