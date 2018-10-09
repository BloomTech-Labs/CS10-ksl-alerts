import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Icon } from 'semantic-ui-react'; // eslint-disable-line
import SignOutButton from '../ButtonComponents/SignOutButton/SignOutButton.js'; //eslint-disable-line
import './TopNav.css';

const TopNav = props => {
  const currentLocation = window.location.pathname;
  if (
    !props.isSignedIn ||
    currentLocation === '/' ||
    currentLocation === '/signIn' ||
    currentLocation === '/signUp'
  )
    return null;

  return (
    <div className="navigationmenu">
      <Menu borderless className="TopNav" size="large">
        <Container className="TopNavWrapper" fluid>
          <Menu.Item
            as={Link}
            to="/feed"
            className="MenuLink"
            active={currentLocation === '/feed'}
            style={{ fontFamily: 'Karla' }}
          >
            <Icon name="feed" position="left" />
            Alerts
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/createAlert"
            className="MenuLink"
            active={currentLocation === '/createAlert'}
          >
            <Icon name="add" position="left" />
            Create Alert
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/billing"
            className="MenuLink"
            style={{ fontFamily: 'Karla' }}
            active={currentLocation === '/billing'}
          >
            <Icon name="credit card" position="left" />
            Billing
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/settings"
            className="MenuLink"
            style={{ fontFamily: 'Karla' }}
            active={currentLocation === '/settings'}
          >
            <Icon name="settings" position="left" />
            Settings
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
