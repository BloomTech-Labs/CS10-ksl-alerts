import React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import './ModalToggle.css';

const ModalToggle = props => {
  let toggle = props.toggle;

  return (
    <Segment className={toggle ? 'modal-wrapper' : 'hidden'}>
      <h4 className="modal-header">Hello :)</h4>
      <Button size="medium" primary onClick={() => props.history.push('/signIn')}>
        Sign In
      </Button>
      <Button size="medium" color="olive" onClick={() => props.history.push('/signUp')}>
        Sign Up
      </Button>
    </Segment>
  );
};

export default ModalToggle;
