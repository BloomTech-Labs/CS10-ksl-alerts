import React from "react";
import { Button } from "semantic-ui-react";

const SignOutButton = props => {
  if (props.isSignedIn) {
    return (
      <Button primary size="medium" onClick={props.signOut}>Sign Out</Button>
    );
  } else {
    return null;
  }
};

export default SignOutButton;