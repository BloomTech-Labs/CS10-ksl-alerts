import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' render={(props) => <App history={props.history}/>} />
    </Switch>
    {/* <App component={(props) => <PageNotFound history={props.history}/>} /> */}
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
