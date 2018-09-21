import React, { Component } from "react";
import cheerio from "cheerio";
import request from "request";

class AlertDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      listings: [],
    };
  }

  componentDidMount() {
    request(this.props.url, (error, response, body) => {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);

      const $ = cheerio.load(body);

      // from view-source page, the data we need consist in script tag inside 'window.renderSearchSection'
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
