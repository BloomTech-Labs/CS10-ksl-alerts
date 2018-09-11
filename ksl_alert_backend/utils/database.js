// Our database code will go here
const mongoose = require('mongoose');

//allows us to connect to the database
module.exports = {
    connectTo: function(database = "test", host = "localhost") {
      return mongoose.connect(`mongodb://${host}/${database}`);
    }
};



