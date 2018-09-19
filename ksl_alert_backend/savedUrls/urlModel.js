const mongoose = require('mongoose');

const SavedUrl = new mongoose.Schema({
    url: String
})

module.exports = mongoose.model('SavedUrl', SavedUrl);

// URL example 
// https://classifieds.ksl.com/search/?keyword=&category%5B%5D=Furniture&subCategory%5B%5D=Futons&zip=84101&miles=10&priceFrom=%240&priceTo=%24200&hasPhotos%5B%5D=Has+Photos&sellerType%5B%5D=Private&marketType%5B%5D=Sale&postedTimeFQ%5B%5D=7DAYS&city=&state=&sort=0

// category =Furniture
// subCategory =Futons 
// zip =84101
// miles =10 
// priceFrom =%240
// priceTo =%24200
// hasPhotos =Has+Photos
// Private&marketType =Sale
// postedTime =7DAYS
// city=&state=&sort=0  -> did not add this type of query.