import React, { Component } from 'react';
import AlertListings from '../AlertListings/AlertListings.js';

// receiving query props from AlertFeed
class AlertCard extends Component {
  state = {
    displayListings: false
  };

  toggleListings = () => {
    this.setState({ displayListings: !this.state.displayListings });
  };

  render() {
    return (
      <div>
        <h4 onClick={this.toggleListings} style={{cursor:'pointer'}}>Query: {this.props.query.title}</h4>
        <AlertListings url={this.props.query.url} displayListings={this.state.displayListings} query={this.props.query}/>
      </div>
    );
  };
};

export default AlertCard;
