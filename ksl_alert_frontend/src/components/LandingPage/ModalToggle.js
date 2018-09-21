import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import './ModalToggle.css';

const ModalToggle = props => {
  let toggle = props.toggle;

  return (
    <Segment className={toggle ? 'modal-wrapper' : 'hidden'}>
      <h4 className="modal-header">Hello :)</h4>
      <Button primary onClick={() => props.history.push('/signIn')}>
        Sign In
      </Button>
      <Button secondary onClick={() => props.history.push('/signUp')}>
        Sign Up
      </Button>
    </Segment>
  );
};

export default ModalToggle;
