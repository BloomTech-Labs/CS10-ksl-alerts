import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import LandingPage from './components/LandingPage/LandingPage.js';
import SignIn from './components/SignIn/SignIn.js';
import SignUp from './components/SignUp/SignUp.js';
import AlertFeed from './components/AlertFeed/AlertFeed.js';
import CreateAlert from './components/CreateAlert/CreateAlert.js';
import Billing from './components/Billing/Billing.js';
import Settings from './components/Settings/Settings.js';
import AlertListings from './components/AlertListings/AlertListings';

class App extends Component {
  state = {
    userId: null,
    isLoggedIn: false,
    queries: [],
  };

  handleSignIn = (id, queries) => {
    this.setState({ userId: id, isLoggedIn: true, queries: queries });
  };

  handleSignOut = () => {
    this.setState({ userId: null, isLoggedIn: false });
  }

  render() {
    return (
      <div className="App">
        <h1>KSL Alerts</h1>
        {this.state.isLoggedIn ? (
          <div className="Nav">
            <Link to="/feed">Alerts</Link>
            <Link to="/createAlert">Create Alert</Link>
            <Link to="/billing">Billing</Link>
            <Link to="/settings">Settings</Link>
          </div>
        ) : null}
        <Switch>
          <Route exact path='/' component={(props) => <LandingPage history={props.history}/>} />
          <Route path='/signIn' component={(props) => <SignIn handleSignIn={this.handleSignIn} history={props.history}/>} />
          <Route path='/signUp' component={(props) => <SignUp handleSignIn={this.handleSignIn} history={props.history}/>} />
          <Route path='/feed' component={(props) => <AlertFeed handleSignOut={this.handleSignOut} id={this.state.userId} queries={this.state.queries} history={props.history} />} />
          <Route path="/createAlert" component={(props) => <CreateAlert id={this.state.userId} history={props.history}/>} />
          <Route path="/billing" component={Billing} />
          <Route path="/settings" component={Settings} />
          {/* for testing */}
          <Route path='/alertListings' component={AlertListings} />
        </Switch>

      </div>
    );
  }
}

export default App;
