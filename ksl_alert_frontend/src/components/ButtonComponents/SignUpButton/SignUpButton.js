import React, { Component } from "react";
import {Button} from "semantic-ui-react";

const SignUpButton = props => {
  if (props.isSignedIn) {
    return null;
  } else {
    return <Button size="small" color="green">Sign Up</Button>;
  }
};

export default SignUpButton;
