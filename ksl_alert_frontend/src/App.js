import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import "./App.css";

import TopNav from "./components/TopNav/TopNav.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AlertFeed from "./components/AlertFeed/AlertFeed";
import CreateAlert from "./components/CreateAlert/CreateAlert";
import Billing from "./components/Billing/Billing";
import Settings from "./components/Settings/Settings";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/signIn' component={SignIn} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/feed' component={AlertFeed} />
        <Route path='/createAlert' component={CreateAlert} />
        <Route path='/billing' component={Billing} />
        <Route path='/settings' component={Settings} />
      </Switch>
      </div>
    );
  }
}

export default App;
