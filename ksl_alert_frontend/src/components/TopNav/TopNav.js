import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Menu } from 'semantic-ui-react';
import './TopNav.css';
// import SignOutButton from '../ButtonComponents/SignOutButton/SignOutButton.js';

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
          <Container className="MenuItems">
            <Menu.Item as="a">
              <Header>
                <Link to="/feed">Alerts</Link>
              </Header>
            </Menu.Item>
            <Menu.Item>
              <Header>
                <Link to="/createAlert">Create Alert</Link>
              </Header>
            </Menu.Item>
            <Menu.Item>
              <Header>
                <Link to="/billing">Billing</Link>
              </Header>
            </Menu.Item>
            <Menu.Item>
              <Header>
                <Link to="/settings">Settings</Link>
              </Header>
            </Menu.Item>
            {/* <SignOutButton isSignedIn={props.isSignedIn} signOut={props.signOut} /> */}
          </Container>
        </Container>
      </Menu>
    </div>
  );
};

export default TopNav;
