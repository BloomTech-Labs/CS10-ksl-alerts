import React, { Component } from "react";
// import { PromiseProvider } from "mongoose";
import alerts from "../../dummyData.js";

/**
 * AlertFeed States:
 * Signed In: Managed through app.js, the alert feed is only rendered if props.login is true,
 * and they've routed to that page (after signing up/signing in, or clicking the alert feed button).
 * The alert feed will have its own local state (state.alerts) --we need to determine how to render--
 **/
export default class AlertFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          alerts: [],
        }
    };

  componentDidMount() {
    //make call to db to get user object
    //save user's query links to a 'queries' variable
    //pass 'queries' into webScraper function
    //save webScraper's return value into an 'alerts' variable
    //pass 'alerts' variable into AlertFeed's state via setState()

    //for testing: get alerts from dummyData and pass into AlertFeed's state via setState()
    this.setState({ alerts: alerts });
  }

  render() {
    const alertFeed = this.state.alerts.map(alert => {
        return <li>Name: {alert.name}, Price: {alert.price}, Category: {alert.category}</li>
    });

    return (
      <ul>
        {alertFeed}
      </ul>
    );
  }
}
