//user route middleware
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('./userModel.js');

router
  .route('/')
  .get((req, res) => {
    User.find()
        .then(users => {
          res.status(200).json(users);
        })
        .catch(err => {
          res.status(500).json({ errorMessage: "Error fetching users" });
        });
  });

router
  .route('/signup')
  .post((req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    newUser
      .save()
      .then(savedUser => {
        res.status(201).json(savedUser);
      })
      .catch(err => {
        res.status(422).json({ errorMessage: "Error creating user" });
      });
});

module.exports = router;
