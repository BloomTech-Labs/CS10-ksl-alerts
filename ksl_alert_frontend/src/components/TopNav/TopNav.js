import React, { Component } from 'react';
import axios from 'axios';
import { Header, Container } from 'semantic-ui-react';
import SignInButton from '../ButtonComponents/SignInButton/SignInButton.js';
import SignUpButton from '../ButtonComponents/SignUpButton/SignUpButton.js';
import "./TopNav.css"

/**
 * 2-3 components (Top-Left: route text, Top-Right: signin/signup/signout)
 * Signed in: Top-Left: displays current route, Top-right: displays sign out)
 * Signed Out: Top-Left: display not rendered, Top-right: SignUp/SignIn button)
 */

const TopNav = props => {
  return (
    <Container className="TopNav" fluid>
      <div>
        <Header className="Header">KSL Alerts</Header>
        <SignUpButton className="Signedup" isSignedIn={props.isSignedIn} />
        <SignInButton className="SignedIn" isSignedIn={props.isSignedIn} />
      </div>
    </Container>
  );
};

export default TopNav;
