import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // eslint-disable-line
import App from './App'; // eslint-disable-line
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') // eslint-disable-line
);
// registerServiceWorker();
