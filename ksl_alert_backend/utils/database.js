// Our database code will go here
const mongoose = require('mongoose');

//allows us to connect to the database
module.exports = {
    connectTo: function(database = "ksl_users", host = "localhost:27017") {
      return mongoose.connect(`mongodb://${host}/${database}`);
    }
};



