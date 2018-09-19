import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ModalToggle.css';

const ModalToggle = props => {

	let toggle = props.toggle;

  return (
    <div className={ toggle ? 'modal-wrapper': 'hidden' }>
			<h4 className='modal-header'>Hello :)</h4>
      <div>
        <input type="text" name="username" placeholder="Enter Username/Email" />
        <input type="text" name="password" placeholder="Enter Password" />
        <button><Link to='/signIn'>Sign In</Link></button>
      </div>
      <div>
        <input type="text" name="username" placeholder="Choose a Username" />
        <input type="text" name="email" placeholder="Enter email address" />
        <input type="text" name="password" placeholder="Enter a Password" />
        <button><Link to='/signUp'>Sign Up</Link></button>
      </div>
			
    </div>
  );
}

export default ModalToggle;