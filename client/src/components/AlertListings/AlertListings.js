import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import ListingCard from '../ListingCard/ListingCard.js'; // eslint-disable-line
import './AlertListings.css';

// receiving query props from AlertCard which has query title and url
class AlertListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/getListings`, {
        url: this.props.url
      })
      .then(res => {
        if (res.data.listings) {
          this.setState({ listings: res.data.listings });
        } else {
          this.setState({ err: 'There was a problem fetching your query!' });
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({ err: 'Your url seems to be invalid!' });
      });
  }

  render() {
    // If there is an err, render the error message
    if (!this.props.displayListings) {
      return null;
    } else {
      // Else, iterate of this.state.listings
      return (
        <div className="AlertListings">
          {this.state.err ? (
            <Header as="p">{this.state.err}</Header>
          ) : (
            this.state.listings.map(listing => {
              return (
                <ListingCard listing={listing} style={{ padding: '20px', height: '400px'}} className="Card"/>
              );
            })
          )}
        </div>
      );
    }
  }
}

export default AlertListings;
