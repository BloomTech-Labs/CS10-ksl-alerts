import React, { Component } from 'react';
import cheerio from 'cheerio';
import request from 'request';
import ListingCard from '../ListingCard/ListingCard.js';

// receiving query props from AlertCard which has query title and url
class AlertListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    // using request library to get url(s) from our user database with specific user id
    request(this.props.url, (error, response, body) => {
      // Check if the request was successful
      if (body && response.statusCode === 200) {
        const $ = cheerio.load(body); // Pass the request body to cheerio for web scraping

        // The data we need exists within 'window.renderSearchSection()' inside a <script> tag (discovered by inspecting page source)
        // Cheerio returns the result as an object; we convert it to an array so we can use array methods
        const scripts = $('script').toArray();

        scripts.find(script => {
          if (script.children[0] !== undefined) {
            if (script.children[0].data !== undefined) {
              if (
                script.children[0].data.includes('window.renderSearchSection')
              ) {
                let searchResults = script.children[0].data;
                // change the format to be json
                const startIndex = searchResults.indexOf('(');
                let results = eval(searchResults.substring(startIndex));
                this.setState({ listings: results.listings });
              }
            }
          }
        });
      }
      // If the query link is invalid, add an error message to `state` to be used as a conditional inside render()
      else {
        this.setState({
          err: 'The query URL you entered seems to be invalid!'
        });
      }
    });
  }

  render() {
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

export default AlertListings;
