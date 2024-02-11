import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { NavProvider } from './components/NavContext';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
        <NavProvider>
          <App/>
        </NavProvider>
    </HelmetProvider>
  </React.StrictMode>
);
