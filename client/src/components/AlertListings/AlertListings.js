import React, { Component } from 'react';
import axios from 'axios';
import ListingCard from '../ListingCard/ListingCard.js'; // eslint-disable-line

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
    if (!this.props.displayListings) {
      return null;
    } else {
      return (
        <div>
          {// If there is an err, render the error message
          // Else, iterate of this.state.listings
            this.state.err ? (
              <p>{this.state.err}</p>
            ) : (
              this.state.listings.map(listing => {
                return (
                  <ListingCard
                    key={listing.createTime}
                    price={listing.price}
                    city={listing.city}
                    createdOn={listing.createTime}
                    photo={listing.photo}
                  />
                );
              })
            )}
        </div>
      );
    }
  }
}

export default AlertListings;
