import React, { Component } from 'react';
import AlertListings from '../AlertListings/AlertListings.js';

// receiving query props from AlertFeed
class AlertCard extends Component {
  constructor(props) {
    super(props);
  };

  state = {
    displayListings: false
  };

  toggleListings = () => {
    this.setState({ displayListings: !this.state.displayListings });
  };

  render() {
    return (
      <div onClick={this.toggleListings} style={{cursor:'pointer'}}>
        <h4>Query: {this.props.query.title}</h4>
        <AlertListings url={this.props.query.url} displayListings={this.state.displayListings}/>
      </div>
    );
  };
};

export default AlertCard;
