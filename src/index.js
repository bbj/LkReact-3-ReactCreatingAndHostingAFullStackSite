import 'whatwg-fetch';
import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; //React 18
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <App />
  </Router>
);
