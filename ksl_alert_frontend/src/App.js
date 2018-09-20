import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage.js';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AlertFeed from './components/AlertFeed/AlertFeed';
import CreateAlert from './components/CreateAlert/CreateAlert';
import Billing from './components/Billing/Billing';
import Settings from './components/Settings/Settings';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userId: null,
      isLoggedIn: false
    };
  }

  handleSignIn = id => {
    this.setState({ userId: id, isLoggedIn: true });
    console.log(this.state);
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
          <Route path='/feed' component={(props) => <AlertFeed handleSignOut={this.handleSignOut} id={this.state.userId} history={props.history} />} />
          <Route path="/createAlert" component={(props) => <CreateAlert id={this.state.userId} history={props.history}/>} />
          <Route path="/billing" component={Billing} />
          <Route path="/settings" component={Settings} />
        </Switch>

      </div>
    );
  }
}

export default App;
