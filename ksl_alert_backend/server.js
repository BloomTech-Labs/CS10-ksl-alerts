const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const PORT = process.env.PORT || 3000;
const stripeRouter = require('./stripe_backend/stripeRoute/stripeRouter')

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

server.get('/', (req,res) => {
  res.status(200).json({ api: 'server running'});
});

mongoose.Promise = global.Promise;

mongoose.connect(process.env.LOCAL_URL, { useNewUrlParser: true }, () => {
  console.log(`\n===== Connected to mLab database =====\n`);
});
// fix DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true);

server.listen(`${PORT}`, () =>
  console.log(`\n===== API running on port ${PORT} =====\n`)
)
