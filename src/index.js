import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from '../src/App';
import './App.css';

const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>//need to remove strict mode and use BrowserRouter instead
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//"Components let you split the UI into independent, reusable pieces, and think about each piece in isolation."