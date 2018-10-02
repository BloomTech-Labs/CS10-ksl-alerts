import React from "react";
import { Button } from "semantic-ui-react";

const SignOutButton = props => {

  if (props.isSignedIn) {
    return (
      <Button onClick={props.signOut(props.history)} primary size="medium">Sign Out</Button>
    );
  } else {
    return null;
  }
};

export default SignOutButton;