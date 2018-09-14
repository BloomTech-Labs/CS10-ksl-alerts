import React, { Component } from "react";

const SignUpButton = props => {
  if (props.isSignedIn) {
    return null;
  } else {
    return <button>Sign Up</button>;
  }
};

export default SignUpButton;
