import React, { Component } from "react";
import {Button} from "semantic-ui-react";

const SignInButton = props => {
  if (props.isSignedIn) {
    return null;
  } else {
    return <Button size="small" color="green" >Sign In</Button>;
  }
};

export default SignInButton;
