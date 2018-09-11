const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//this is creating the middleware to be able to communicate with frontend
module.exports = function(server) {
    server.use(express.json());
    server.use(helmet());
    //don't forget to add the cors option here
};
