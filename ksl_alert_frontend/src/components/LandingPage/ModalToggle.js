import React from 'react';
import { Link } from 'react-router-dom';
import './ModalToggle.css';

const ModalToggle = props => {
  let toggle = props.toggle;

  return (
    <div className={toggle ? 'modal-wrapper' : 'hidden'}>
      <h4 className="modal-header">Hello :)</h4>
      <div>
        <button>
          <Link to="/signIn">Sign In</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to="/signUp">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default ModalToggle;
