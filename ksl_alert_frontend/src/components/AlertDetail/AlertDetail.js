import React, { Component } from "react";
import cheerio from "cheerio";
import request from "request";

// receiving query props from AlertCard which has query title and url
class AlertDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      listings: [],
    };
  }

  componentDidMount() {
    // using request library to get url that saved in our user database with specific user id 
    request(this.props.url, (error, response, body) => {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);

      // passing the body to cheerio 
      const $ = cheerio.load(body);

      // from view-source page, the data we need consist in script tag inside 'window.renderSearchSection'
      // Cheerio return the result as an object so we convert it to an array because we can use array methods
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
          return (
            <div>
              <p>Price: {listing.price}</p>
              <p>City: {listing.city}</p>
              <p>Created On: {listing.createTime}</p>
              <img src={`https://${listing.photo.slice(2)}`} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default AlertDetail;
