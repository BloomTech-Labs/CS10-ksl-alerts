// Our database code will go here
const mongoose = require('mongoose');

//for .env file to save sensitive info
require('dotenv').config();

//allows us to connect to the database
module.exports = {
    connectTo: function(database = "ksl_users", host = "localhost:27017") {
      // return mongoose.connect(`mongodb://${host}/${database}`);
      return mongoose.connect
      // (`mongodb://ksl7alert:kslalert123@ds255262.mlab.com:55262/ksl7alert`);
      (`mongodb://${process.env.dbuser}:${process.env.dbpassword}@ds255262.mlab.com:55262/ksl7alert`);
    }
};



