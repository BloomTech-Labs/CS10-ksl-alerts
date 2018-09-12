//user route middleware
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("./userModel.js");

const secret = "Something here";

//generate token for the login
const generateToken = user => {
  const options = {
    expiresIn: "24h"
  };
  const payload = {};
  return jwt.sign(payload, secret, options);
};

router.route("/").get((req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Error fetching users" });
    });
});

router.route("/signUp").post((req, res) => {
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

router.route("/signIn").post((req, res) => {
  const { email, password } = req.body;
  User
    .findOne({ email })
    .then(user => {
        if(user) {
          user.validatePassword(password)
            .then(match => {
              if(match) {
                const token = generateToken({ email });
                res.status(200).json({ message: `Welcome back ${ email }`, token });
              } else {
                res.status(404).json({ errorMessage: "Invalid email or password" });
              }
            })
            .catch(err => {
              res.status(500).json({ errorMessage: "Error", err});
            });
        }
    })
    .catch(err => {
      res.status(404).json({ errorMessage: "User not found"});
    });
});

module.exports = router;

