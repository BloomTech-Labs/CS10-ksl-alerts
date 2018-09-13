import React, { Component } from "react";


/**
 * 3 Components: TopNav, Main Body Text, Button
 * The rendering for all three states is going to be same because the landing page 
 * is the starting point for any interaction with the site. 
 */
export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <p>Welcome to KSL alerts!!!</p>
                <button>Get Started</button>
            </div>
        );
    }
}