const router = require("express").Router();
const request = require('request');
const cheerio = require('cheerio');

// const couchURL = "https://classifieds.ksl.com/search?category[]=Furniture&subCategory[]=Couches%20and%20Loveseats%2C%20Fabric&keyword=&priceFrom=%24150&priceTo=%24300&zip=84095&miles=25&sellerType[]=&marketType[]=Sale&hasPhotos[]=&postedTimeFQ[]=";
// const next25ListingsURL = "https://classifieds.ksl.com/search/index?page=1"; //next 24 listings

//web scraping middleware
const webScraper = (queries) => {
  const listingsData = [];
  console.log(`----------------> webScraping ran`);

  //do web scraping for each query and push to a listings array
  const queryDataArray = queries.map(queryURL => {
    const queryData = [];
    request(queryURL, (error, response, body) => {
      console.log("queryURL", queryURL);
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      // console.log('body', body);
  
      const $ = cheerio.load(body);
      const scripts = $('script').toArray();

      let numberOfScripts = 0; // for testing how many scripts/queries get scraped
  
      scripts.forEach(script => {
          if (script.children[0] !== undefined) {
              if (script.children[0].data !== undefined) {
                  if (script.children[0].data.includes('window.renderSearchSection')) {
                      // console.log(script.children[0].data);
                      const searchResults = script.children[0].data;
                      // queryData.push({ title: "couch 1" });
                      // numberOfScripts += 1;
                      // listingsData.push({ listingData: numberOfScripts });
                      // const numberOfListings = 311; //for testing
                      // if (numberOfListings > 24) {
                      //   //go through multiple index pages: 0, 1, 2, etc
                      //   const numberOfPages = numberOfListings / 24; //do correct math to get number of pages to scrape data from
                      //   for (let i = 1; i < numberOfPages; i++) {
                      //     console.log(`----------------> webScraping next page: ${i}`);
                      //     // const nextPageURL = "https://classifieds.ksl.com/search/index?page=" + i;
                      //     // const nextPageListingData = request(nextPageURL, (error, response, body) => {

                      //     // })
                      //     listingsData.push(i);
                      //   }
                      // }
                  }
              }
          }
      });
    });
    return queryData;
  });
  console.log("listingsData", listingsData);
  // return [1,2,3]
  return listingsData;
};

router.route("/").post((req, res) => {
  const { queries } = req.body; //queries is an array of queries

  //make call to web scraper middleware
  const listingsData = webScraper(queries); //web scraper middleware returns listings, as response, to the frontend

  if (listingsData.length > 1) {
    res.status(200).json({ "Here is your scraped listings data": listingsData });
  } else {
    res.status(404).json({ "There is no listings data for this search": listingsData });
  }
});

module.exports = router;
