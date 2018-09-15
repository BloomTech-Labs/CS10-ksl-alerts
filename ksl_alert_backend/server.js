const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');

const server = express();
const corsOptions = {
  origin: '*',
  credential: true
};

const port = process.env.PORT || 8000;

server.use(express.json());
server.use(helmet());
server.use(cors({ corsOptions }));

// users and url routes 
const usersRoute = require('./users/userController');
//const savedUrlRoute = require('./savedUrls/urlController');

server.use('/api/users', usersRoute);
//server.use('./api/savedUrl', savedUrlRoute);

server.get('/', (req,res) => {
  res.status(200).json({ api: 'server running'});
});

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${process.env.dbuser}:${process.env.dbpassword}@ds157742.mlab.com:57742/my_ksl_alert`, { useNewUrlParser: true }, () => {
  console.log(`\n===== Connected to mLab database =====\n`);
});
// fix DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true);

server.listen(`${port}`, () =>
  console.log(`\n=== API running on port ${port} ===\n`)
)
