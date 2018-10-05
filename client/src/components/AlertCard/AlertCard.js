import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import AlertListings from '../AlertListings/AlertListings.js';
import './AlertCard.css';

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
      <div className="AlertCard">
        <Header onClick={this.toggleListings} style={{ cursor: 'pointer' }}>
          {this.props.query.title}
        </Header>
        <AlertListings
          url={this.props.query.url}
          displayListings={this.state.displayListings}
          query={this.props.query}
          style={{ display: 'flex' }}
        />
      </div>
    );
  }
}

export default AlertCard;
