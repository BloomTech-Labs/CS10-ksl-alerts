import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import SignInButton from "../ButtonComponents/SignInButton/SignInButton.js";
import SignUpButton from "../ButtonComponents/SignUpButton/SignUpButton.js";

/**
 * 2-3 components (Top-Left: route text, Top-Right: signin/signup/signout)
 * Signed in: Top-Left: displays current route, Top-right: displays sign out)
 * Signed Out: Top-Left: display not rendered, Top-right: SignUp/SignIn button)
 */

const TopNav = props => {
  if (!props.isSignedIn) return null;
  
  return (
    <Container className="TopNavWrapper" fluid>
          <div className="TopNav">
            <Link to="/feed">Alerts</Link>
            <Link to="/createAlert">Create Alert</Link>
            <Link to="/billing">Billing</Link>
            <Link to="/settings">Settings</Link>
          </div>
      <SignUpButton isSignedIn={props.isSignedIn} />
      <SignInButton isSignedIn={props.isSignedIn} />
    </Container>
  )
};

export default TopNav;
