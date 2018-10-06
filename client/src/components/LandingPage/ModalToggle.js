import React from 'react';
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
          <Header>Just easy steps</Header>
            <Icon name='write' position='left' />
            <p>Copy url link of your KSL search</p>
            <Icon name='write' position='left' />
            <p>Go to "Create Alert"</p>
            <Icon name='write' position='left' />
            <p>Name Alert Title</p>
            <Icon name='write' position='left' />
            <p>Add the link in url field</p>
        </Grid.Column>

        <Grid.Column className='action-field' width={8}>
          <SignUp />
          <p>Already have an account?</p>
          <Button size="medium" primary onClick={() => props.history.push('/signIn')}>
            Sign In
          </Button>
          {/* <Button size="medium" secondary onClick={() => props.history.push('/signUp')}>
            Sign Up
          </Button> */}
          
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ModalToggle;
