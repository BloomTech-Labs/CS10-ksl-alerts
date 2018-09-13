import React, { Component } from "react";
import TopNav from "../TopNav/TopNav.js";

/**
 * AlertFeed States: 
 * Signed In: Managed through app.js, the alert feed is only rendered if props.login is true, 
 * and they've routed to that page (after signing up/signing in, or clicking the alert feed button).
 * The alert feed will have its own local state (state.alerts) --we need to determine how to render--
 **/
export default class AlertFeed extends Component {
    render() {
        return (
            <div>
                <p>Alert Feed</p>
            </div>
    )   ;
    }
}