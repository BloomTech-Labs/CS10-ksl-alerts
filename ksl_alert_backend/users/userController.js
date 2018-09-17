//user route middleware
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("./userModel.js");

//for .env file to save sensitive info
require('dotenv').config();

const secret = process.env.secret;

// middlewares
// generate token for the login
const generateToken = user => {
  const options = {
  	expiresIn: "24h"
	};
	
  const payload = {};
    return jwt.sign(payload, secret, options);
};

// protect routes. Need to login in order to access the routes
const restrictedRoute = (req, res, next) => {
	const token = req.headers.authorization;
	if(token) {
		jwt.verify(token, secret, (err, decodedToken) => {
			req.jwtPayload = decodedToken;
			console.log('Decoded Token:', decodedToken);
			
			if(err) {
				res.status(403).json({ errorMessage: 'Please log in.', err});
				return;
			}

			next();
		});
	} else {
		res.status(403).json({ message: 'Please log in.'})
	}
}


// functions that will pass to each endpoints
const getAllUsers = (req, res) => {
	User
		.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Error fetching users" });
  });
};

const signUp = (req, res) => {
  const { email, password } = req.body;
	const newUser = new User({ email, password });
	if(!email || !password) {
		res.status(403).json({ errorMessage: 'Please provide email and password.' })
	}
  newUser
    .save()
    .then(savedUser => {
    	res.status(201).json(savedUser);
    })
    .catch(err => {
      res.status(422).json({ errorMessage: "Error creating user" });
    });
};


const signIn = (req, res) => {
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
};

const update = (req, res) => {
	const { id } = req.params;
	const { email, password } = req.body;
	User
		.findByIdAndUpdate(id, req.body)
		.then(newUpdate => {
			res.status(201).json(newUpdate);
		})
		.catch(err => {
			res.status(500).json(err);
		})
}
// /* user information update --WIP--
// router.route("/update").put((req, res) => {
//   const { id } = req.params;
//   const { email, oldPassword, newPassword } = req.body;
//   if (email && oldPassword && !newPassword)
// })
// */



// refactor routes endpoints
router.route('/').get(restrictedRoute, getAllUsers);
router.route('/signUp').post(signUp);
router.route('/signIn').post(signIn);
router.route('/setting').put(update);


module.exports = router;