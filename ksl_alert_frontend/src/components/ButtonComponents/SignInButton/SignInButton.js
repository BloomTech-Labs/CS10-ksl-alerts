import React, { Component } from "react";

const SignInButton = props => {
  if (props.isSignedIn) {
    return null;
  } else {
    return <button>Sign In</button>;
  }
};

export default SignInButton;
