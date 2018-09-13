import React from 'react';

const signUpButton = (props) => {
    if (props.signedIn) {
        return null;
    } else {
        return (
            <button>Sign Up</button>
        )
    }
};

export default signUpButton;