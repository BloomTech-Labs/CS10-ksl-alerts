import React, { Component } from "react";

/**
 * 2-3 components (Top-Left: route text, Top-Right: signin/signup/signout)
 * Signed in: Top-Left: displays current route, Top-right: displays sign out)
 * Signed Out: Top-Left: display not rendered, Top-right: SignUp/SignIn button)
 */
export default class TopNav extends Component {
    render() {
        return (
            <div>
                TopNav, SignIn | SignOut
            </div>
        );
    }
}