const router = require("express").Router();
const request = require('request');
const cheerio = require('cheerio');

const couchURL = "https://classifieds.ksl.com/search?category[]=Furniture&subCategory[]=Couches%20and%20Loveseats%2C%20Fabric&keyword=&priceFrom=%24150&priceTo=%24300&zip=84095&miles=25&sellerType[]=&marketType[]=Sale&hasPhotos[]=&postedTimeFQ[]=";
const next25ListingsURL = "https://classifieds.ksl.com/search/index?page=1"; //next 24 listings

//web scraping middleware
const webScraper = (queries) => {
  const data = [];
  //do web scraping and return the scraped data
  queries.map(queryURL => {
    request(queryURL, (error, response, body) => {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log(`----------------> webScraping ran`);
      // console.log('body:', body);
  
      const $ = cheerio.load(body);
  
      const scripts = $('script').toArray();
  
      scripts.forEach(script => {
          if (script.children[0] !== undefined) {
              if (script.children[0].data !== undefined)
                  if (script.children[0].data.includes('window.renderSearchSection'))
                      console.log(script.children[0].data);
                      const numberOfListings = 311; //for testing
                      if (numberOfListings > 24) {
                        //make a call here - https://classifieds.ksl.com/search/index?perPage=96
                        //go through multiple index pages: 0, 1, 2, etc
                        const numberOfPages = numberOfListings / 24; //do correct math to get number of pages to scrape data from
                        for (let i = 1; i < numberOfPages; i++) {
                          console.log(`----------------> webScraping next page: ${i}`);
                          // const nextPageURL = "https://classifieds.ksl.com/search/index?page=" + i;
                          // const nextPageListingData = request(nextPageURL, (error, response, body) => {

                          // })
                          data.push(i);
                        }
                      }
          }
      });
    });
  })
  // return data;
  console.log("data", data);
};

webScraper([couchURL]);

// router.route("/webScraper").get((req, res) => {
//   const queries = req.body;
//   //make call to web scraper middleware
//   const data = webScraper(queries);
//   //web scraper middleware returns data
//   //return data, as response, to the frontend
//   res.json(data);
// });
