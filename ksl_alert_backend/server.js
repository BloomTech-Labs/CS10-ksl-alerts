//this is where we are setting up the node server that connects to our database
const express = require("express");
//for .env file to save sensitive info
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const database = require("./utils/database.js");
const middleware = require("./utils/middleware.js");
const stripe = require("stripe")("sk_test_ecM4zgXGjcGtiNNietW2yjZs");

//routes imports
const userController = require("./users/userController.js");

const server = express();

//middleware
middleware(server);

server.use("/api/users", userController);

database
  .connectTo("ksl_users")
  .then(() => {
    console.log(`\n... API Connected to ksl_users ...\n`);
    server.listen(`${PORT}`, () =>
      console.log(`\n=== API running on port ${PORT} ===\n`)
    );
  })
  .catch(err => {
    console.log(`\n*** ERROR Connecting to MongoDB, is it running? ***\n`, err);
  });
