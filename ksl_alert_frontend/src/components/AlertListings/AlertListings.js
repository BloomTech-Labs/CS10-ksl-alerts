import React, { Component } from "react";
import cheerio from "cheerio";
import request from "request";
import ListingCard from '../ListingCard/ListingCard.js';

// receiving query props from AlertCard which has query title and url
class AlertListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    // using request library to get url(s) from our user database with specific user id
    request(this.props.url, (error, response, body) => {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);

      // passing the body to cheerio
      const $ = cheerio.load(body);

      // from view-source page, the data we need consists inside the script tag 'window.renderSearchSection'
      // Cheerio returns the result as an object, so we convert it to an array because we can use array methods
      const scripts = $("script").toArray();

      scripts.find(script => {
        if (script.children[0] !== undefined) {
          if (script.children[0].data !== undefined) {
            if (
              script.children[0].data.includes("window.renderSearchSection")
            ) {
              let searchResults = script.children[0].data;
              // change the format to be json
              const startIndex = searchResults.indexOf("(");
              let results = eval(searchResults.substring(startIndex));
              this.setState({ listings: results.listings });
              // console.log(results);
            }
          }
        }
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.listings.map(listing => {
          return <ListingCard 
            price={listing.price}
            city={listing.city}
            createdOn={listing.createTime}
            photo={listing.photo}
          />
        })}
      </div>
    );
  }
}

export default AlertListings;
