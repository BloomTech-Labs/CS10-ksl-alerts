const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const PORT = process.env.PORT || 8000;
const stripeRouter = require('./stripe_backend/stripeRoute/stripeRouter');
const request = require('request');
const cheerio = require('cheerio');

const server = express();
const corsOptions = {
  origin: '*',
  credential: true
};

server.use(express.json());
server.use(helmet());
server.use(cors({ corsOptions }));

// users and url routes
const userRoute = require('./user/userController');

server.use('/api/user', userRoute);

server.use('/payments', stripeRouter);

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

      scripts.find(script => {
        if (script.children[0] !== undefined) {
          if (script.children[0].data !== undefined) {

            const scriptContents = script.children[0].data;

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
  () => {console.log(`\n===== Connected to database =====\n`)}
);
// fix DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true);

server.listen(`${PORT}`, () =>
  console.log(`\n===== Server running on port ${PORT} =====\n`)
);
