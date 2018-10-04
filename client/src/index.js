import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, // eslint-disable-line
  Route, // eslint-disable-line
  Switch // eslint-disable-line 
} from 'react-router-dom';

import App from './App'; // eslint-disable-line
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" render={props => <App history={props.history} />} />
    </Switch>
  </Router>,
  document.getElementById('root') // eslint-disable-line
);
// registerServiceWorker();
