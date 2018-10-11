const express = require('express');
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const stripe = require('stripe')(keySecret);
const UserModel = require('../../user/userModel');

// intializing the router
const router = express.Router();

router.post('/', (req, res) => {
  const email = req.email;
  const source = req.body.source;
  const description = req.body.description;
  let chosenplan = '';

  if (description === '1 month unlimited alerts') {
    chosenplan = 'plan_DihQ6Mc5iftbNP';
  } else if (description === '6 month unlimited alerts') {
    chosenplan = 'plan_DihRXqZm8riQ0Q';
  } else if (description === '1 year unlimited alerts') {
    chosenplan = 'plan_DihSJVusL6mbrj';    
  } else {
    console.log('An error occured no plan was chosen', description);
  }
  if (description !== null) {
    stripe.customers.create(
      {
        email: email,
        source: source
      },
      function(err, customer) {
        if (customer !== null) {
          stripe.plans.retrieve(chosenplan, function(err, plans) {
            stripe.subscriptions
              .create(
                {
                  customer: customer.id,
                  items: [
                    {
                      plan: plans.id
                    }
                  ]
                },
                function(err, subscription) {}
              )
              .then(response => {
                res.json(response);
              })
              .catch(err => res.status(500).json({ error: err.message }));
          });
        } else {
          console.log('The token has expired please try again', err);
        }
      }
    );
  } else {
    console.log('no description was present', description);
  }
});
module.exports = router;
