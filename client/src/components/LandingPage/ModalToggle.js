import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Segment, Grid, Header, Icon } from 'semantic-ui-react';
import './ModalToggle.css';
import SignUp from '../SignUp/SignUp.js';

const ModalToggle = props => {
  let toggle = props.toggle;

  return (
    <div className={toggle ? 'modal-wrapper' : 'hidden'}>
      {/* <h4 className="modal-header">Welcome to KSL Alert</h4> */}
      <Grid className='GridWrap'>
        <Grid.Column className='how-to' width={8}>
        <Header style={{ marginTop: '2rem' }}>Just Simple Steps</Header>
          <Grid.Row className='how-to-row'>
            <Grid.Column>
              <Icon name='add user' size='big' color='blue'/>
            </Grid.Column>
            <Grid.Column>Join us</Grid.Column>
          </Grid.Row>
          <Grid.Row className='how-to-row'>
            <Grid.Column>
              <Icon name='share' size='big' color='blue'/>
            </Grid.Column>
            <Grid.Column>Go to "Create Alert" page</Grid.Column>
          </Grid.Row>
          <Grid.Row className='how-to-row'>
            <Grid.Column>
              <Icon name='write' size='big' color='blue'/>
            </Grid.Column>
            <Grid.Column>Create your search title</Grid.Column>
          </Grid.Row>
          <Grid.Row className='how-to-row'>
            <Grid.Column>
              <Icon name='copy' size='big' color='blue'/>
            </Grid.Column>
            <Grid.Column>Add URL link of your KSL search</Grid.Column>
          </Grid.Row>          
        </Grid.Column>

        <Grid.Column className='action-field' width={8}>
          <Header style={{ marginTop: '2rem' }}>Join Us</Header>
          <SignUp handleSignIn={props.handleSignIn} history={props.history} />
          <p style={{ color: 'black', marginTop: '2rem' }}>Already have an account?<span className='sign-in-link'><Link to='/signIn'>Sign In</Link></span></p>
          
          {/* <Button size="medium" primary onClick={() => props.history.push('/signIn')}>
            Sign In
          </Button> */}
          {/* <Button size="medium" secondary onClick={() => props.history.push('/signUp')}>
            Sign Up
          </Button> */}          
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ModalToggle;
