import React, { Component } from "react";
import cheerio from "cheerio";
import request from "request";

class AlertDetail extends Component {
  constructor() {
    super();
    this.state = {
      url:
        "https://classifieds.ksl.com/search/?keyword=guitar&zip=84101&miles=25&priceFrom=%240&priceTo=%24100&hasPhotos%5B%5D=Has+Photos&marketType%5B%5D=Sale&postedTimeFQ%5B%5D=1DAY&city=&state=&sort=0",
      title: "Guitar",
      listings: [],
    };
  }

  componentDidMount() {
    request(this.state.url, (error, response, body) => {
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
        <h3>Alert Detail!</h3>
        {this.state.listings.map(listing => {
          return (
            <div>
              <p>Item name: {listing.title}</p>
              <p>{listing.price}</p>
              <p>{listing.city}</p>
              <p>{listing.createTime}</p>
              <img src={`https://${listing.photo.slice(2)}`} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default AlertDetail;
