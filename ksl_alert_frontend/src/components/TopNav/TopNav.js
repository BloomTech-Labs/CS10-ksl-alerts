import React, { Component } from "react";
import SignUpButton from '../ButtonComponents/Buttons.js';

/**
 * 2-3 components (Top-Left: route text, Top-Right: signin/signup/signout)
 * Signed in: Top-Left: displays current route, Top-right: displays sign out)
 * Signed Out: Top-Left: display not rendered, Top-right: SignUp/SignIn button)
 */

const TopNav = (props) => {
        let signUpButton = '';
        let signInButton = '';
        let routeText = null;
        if (props.signedIn) {
            signInButton = "Sign Out";
            routeText = "Page Route";
        } else {
            signUpButton = "Sign Up";
        }
        return (
            <div>
                <a>{routeText}</a>
                <SignUpButton signedIn={props.signedIn} />
            </div>
        );
    }

export default TopNav;