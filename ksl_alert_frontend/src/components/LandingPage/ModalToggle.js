import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ModalToggle.css';

const ModalToggle = props => {

	let toggle = props.toggle;

  return (
    <div className={ toggle ? 'modal-wrapper': 'hidden' }>
			<h4 className='modal-header'>Hello :)</h4>
			<button><Link to='/signIn'>Sign In</Link></button>
			<button><Link to='/signUp'>Sign Up</Link></button>
    </div>
  );
}

export default ModalToggle;