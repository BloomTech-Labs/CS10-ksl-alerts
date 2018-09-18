//user route middleware
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("./userModel.js");

//for .env file to save sensitive info
require('dotenv').config();

const secret = process.env.secret;

//generate token for the login
const generateToken = user => {
  const options = {
    expiresIn: "24h"
  };
  const payload = {};
  return jwt.sign(payload, secret, options);
};

//this route is the "home" route which makes a get call to our database
router.route("/").get((req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Error fetching users" });
    });
});

//This route gives the user the ability to sign up for the site.
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

// This block of code creates the route for users to be able to sign in
router.route("/signIn").post((req, res) => {
  const { email, password } = req.body;
  User
		.findOne({ email })
		.then(user => {
			if (!user) {
				return res.status(403).json({ errorMessage: "User not found "})
			} else {
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
					res.status(500).json(err);
				})
			}
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

/* user information update --WIP--
router.route("/update").put((req, res) => {
  const { id } = req.params;
  const { email, oldPassword, newPassword } = req.body;
  if (email && oldPassword && !newPassword)
})
*/

module.exports = router;

