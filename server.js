const express = require('express');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const request = require('request');
const cheerio = require('cheerio');

const PORT = process.env.PORT || 8000;
const stripeRouter = require('./stripe/stripeRoute/stripeRouter');
const userRoute = require('./user/userController');

const server = express();
const corsOptions = {
  origin: '*',
  credential: true
};

server.use(express.json());
server.use(helmet());
server.use(cors({ corsOptions }));

// serve static client files at root endpoint
server.use(express.static(path.join(__dirname, 'client/build')));

server.use('/api/user', userRoute);

server.use('/api/payments', stripeRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'server running' });
});

// Web scraping
server.post('/api/getListings', (req, res) => {
  request(req.body.url, (error, response, body) => {
    if (error) {
      res.status(500).json({ err: 'The URL seems to be invalid!' });
    } else {
      // Check if the request was successfu;
      const $ = cheerio.load(body); // Pass the body to cheerio for scraping
      const scripts = $('script').toArray(); // select all 'script' tags

      // search through all of the 'scripts' tags
      scripts.find(script => {
        // look for scripts that contain a child with a data property
        if (script.children[0] !== undefined) {
          if (script.children[0].data !== undefined) {
            // get the contents of the script tag
            const scriptContents = script.children[0].data;

            // check if a script contains the 'window.renderSearchSection' function that
            // contains the listings (discovered by inspecting the response body)
            if (scriptContents.includes('window.renderSearchSection')) {
              let searchResults = script.children[0].data;
              const startIndex = searchResults.indexOf('(');
              let listings = eval(searchResults.substring(startIndex));
              res.status(200).json(listings);
            }
          }
        }
      });
    }
  });
});

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true },
  () => {
    console.log(`\n===== Connected to database =====\n`);
  }
);
// fix DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true);

server.listen(`${PORT}`, () =>
  console.log(`\n===== Server running on port ${PORT} =====\n`)
);
