import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Menu, Icon } from 'semantic-ui-react';
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
          {/* <Container className="MenuItems"> */}
            <Menu.Item as="a">
              
                <Icon name='feed' position='left'/> 
                <Link to="/feed" className='MenuLink'>Alerts</Link>
              
            </Menu.Item>
            <Menu.Item as="a">
              
                <Icon name='add' position='left'/> 
                <Link to="/createAlert" className='MenuLink'>Create Alert</Link>
              
            </Menu.Item>
            <Menu.Item as="a">
              
                <Icon name='credit card' position='left'/> 
                <Link to="/billing" className='MenuLink'>Billing</Link>
              
            </Menu.Item>
            <Menu.Item as="a">
              
                <Icon name='settings' position='left'/> 
                <Link to="/settings" className='MenuLink'>Settings</Link>
              
            </Menu.Item>
            {/* <SignOutButton isSignedIn={props.isSignedIn} signOut={props.signOut} /> */}
          {/* </Container> */}
        </Container>
      </Menu>
    </div>
  );
};

export default TopNav;
