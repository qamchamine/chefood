import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { LoginProvider } from './config/LoginContext';
import { ShoppingProvider } from './config/ShoppingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <LoginProvider>
  <LoginProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ShoppingContext>
  </LoginProvider>

);

