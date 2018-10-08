import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Menu, Icon } from "semantic-ui-react";
import SignOutButton from "../ButtonComponents/SignOutButton/SignOutButton.js";
import "./TopNav.css";

const TopNav = props => {
  const currentLocation = window.location.pathname;
  if (
    !props.isSignedIn ||
    currentLocation === "/" ||
    currentLocation === "/signIn" ||
    currentLocation === "/signUp"
  )
    return null;

  return (
    <div className="navigationmenu">
      <Menu borderless className="TopNav" size="large">
        <Container className="TopNavWrapper" fluid>
          {/* <Container className="MenuItems"> */}
          <Menu.Item as="a">
            <Icon name="feed" position="left" />
            <Link to="/feed" className="MenuLink">
              Alerts
            </Link>
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="add" position="left" />
            <Link to="/createAlert" className="MenuLink">
              Create Alert
            </Link>
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="credit card" position="left" />
            <Link to="/billing" className="MenuLink">
              Billing
            </Link>
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="settings" position="left" />
            <Link to="/settings" className="MenuLink">
              Settings
            </Link>
          </Menu.Item>
          <Menu.Item>
            <SignOutButton
              isSignedIn={props.isSignedIn}
              signOut={props.signOut}
            />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default TopNav;
