import React from "react";
import { Button } from "semantic-ui-react"

const SignUpButton = props => {
  if (props.isSignedIn) {
    return null;
  } else {
    return <Button size="medium">Sign Up</Button>;
  }
};

export default SignUpButton;
