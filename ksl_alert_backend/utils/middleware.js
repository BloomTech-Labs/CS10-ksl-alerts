const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//this is creating the middleware to be able to communicate with frontend
module.exports = function(server) {
    server.use(express.json());
    server.use(helmet());
    server.post("/api/charge", async (req, res) => {
        try {
          let { status } = await stripe.charges.create({
            amount: 2000,
            currency: "usd",
            description: "An example charge",
            source: req.body
          });
      
          res.json({ status });
        } catch (err) {
          res.status(500).end();
        }
      });
    //don't forget to add the cors option here
};
