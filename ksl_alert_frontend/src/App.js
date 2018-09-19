import React, { Component } from "react";
import {Elements, StripeProvider} from 'react-stripe-elements';
import "./App.css";

import LandingPage from "./components/LandingPage/LandingPage.js";
import TopNav from "./components/TopNav/TopNav.js";
import SideNav from "./components/SideNav/SideNav.js";
import CreateAlert from "./components/CreateAlert/CreateAlert.js";
import Settings from "./components/Settings/Settings.js";
import Billing from "./components/Billing/Billing.js";
import AlertFeed from './components/AlertFeed/AlertFeed';

class App extends Component {
  //declaring our app states
  state = {
    signedIn: false,
  };

  render() {
    return (
      <div className="App">
        <TopNav isSignedIn={this.state.signedIn} />
        <LandingPage />
        <AlertFeed />
        <Billing />
      </div>
    );
  }
}

export default App;
