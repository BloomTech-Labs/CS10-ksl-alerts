//this is where we are setting up the node server that connects to our database
const express = require('express');
const PORT = process.env.PORT || 5000;
const database = require('./utils/database.js');
const middleware = require('./utils/middleware.js');

//don't forget to destructure and require our routes.js file here

const server = express();
middleware(server);


server.listen(`${PORT}`, () =>
     console.log(`\n=== API running on port ${PORT} ===\n`)
)
/* WIP until we have our controller and schema built
database
 .connectTo("test")
 .then(() => {
   console.log(“\n... API Connected to lambda-Notes Database ...\n”);
   server.listen(`${port}`, () =>
     console.log(`\n=== API running on port ${port} ===\n`)
   );
 })
 .catch(err => {
   console.log(“\n*** ERROR Connecting to MongoDB, is it running? ***\n”, err);
 });
*/
