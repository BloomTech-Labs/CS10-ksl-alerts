import React, { Component } from "react";
import { Button } from 'semantic-ui-react';

const SignInButton = props => {
  if (props.isSignedIn) {
    return null;
  } else {
    return <Button color="olive" size="medium">Sign In</Button>;
  }
};

export default SignInButton;
