import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { 
  Container,
  Dropdown,
  Header,
  Menu,
} from "semantic-ui-react";
import SignInButton from "../ButtonComponents/SignInButton/SignInButton.js";
import SignUpButton from "../ButtonComponents/SignUpButton/SignUpButton.js";
import "./TopNav.css"

/**
 * 2-3 components (Top-Left: route text, Top-Right: signin/signup/signout)
 * Signed in: Top-Left: displays current route, Top-right: displays sign out)
 * Signed Out: Top-Left: display not rendered, Top-right: SignUp/SignIn button)
 */
 
const TopNav = props => {
  if (!props.isSignedIn) return null;
  
  return (
      <div className="navigationmenu">
        <Menu className="TopNav">
          <Container className="TopNavWrapper" fluid>
            <Menu.Item as="a">
              <Header>
                <Link to="/feed">Alerts</Link>
              </Header>
            </Menu.Item>
            <Dropdown.Item>
              <Header>
                <Link to="/createAlert">Create Alert</Link>
              </Header>
            </Dropdown.Item>
            <Dropdown.Item>
              <Header>
                <Link to="/createAlert">Create Alert</Link>
              </Header>
            </Dropdown.Item>
            <Dropdown.Item>
              <Header>
                <Link to="/billing">Billing</Link>
              </Header>
            </Dropdown.Item>
            <Dropdown.Item>
              <Header>
                <Link to="/settings">Settings</Link>
              </Header>
            </Dropdown.Item>
            {/* <SignUpButton isSignedIn={props.isSignedIn} />
            <SignInButton isSignedIn={props.isSignedIn} /> */}
          </Container>
        </Menu>
      </div>
  )
};

export default TopNav;
