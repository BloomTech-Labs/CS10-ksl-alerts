//user route middleware
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("./userModel.js");

//for .env file to save sensitive info
require('dotenv').config();

const secret = process.env.SECRET;

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

// get user by ID
const getUserById = (req, res) => {
	const { id } = req.body;
	User
		.findById(id)
		.then(user => {
			if (!user) {
				res.status(403).json({ errorMessage: "User not found "});
			} else {
				res.status(200).json(user);
			}			
		})
		.catch(err => {
			res.status(500).json({ errorMessage: "Error fetching user" });
		});
};

const signUp = (req, res) => {
  const { email, password } = req.body;
	const newUser = new User({ email, password });
	if(!email || !password) {
		res.status(403).json({ errorMessage: 'Please provide email and password.' });
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
				});
			}
		})
		.catch(err => {
			res.status(500).json(err);
		});
};

/** Save a new query
 * Find User
 * Get User's current queries
 * Add new query
 * Return array of updated queries
 */
const saveQuery = (req, res) => {
	const { title, url, id } = req.body;
	User
		.findById(id)
		.then(user => {
			const queries = user.queries;
			const newQuery = {title, url};
			const updatedQueries = [...queries, newQuery];
			return updatedQueries;
		})
		.then(updatedQueries => {
			User
			.findByIdAndUpdate(id, { queries: updatedQueries }, { new: true })
			.then(updatedUser => {
				res.status(201).json(updatedUser);
			})
			.catch(error => {
				res.status(500).json({ errorMessage: "User could not be updated", error });
			});
		})
		.catch(error => {
			rest.status(500).json({ errorMessage: "User could not be found :(", error });
		});
};

// refactor routes endpoints
router.route('/').get(restrictedRoute, getAllUsers);
router.route('/signUp').post(signUp);
router.route('/signIn').post(signIn);

// route that require ID 
router.route('/getUser').post(getUserById);
router.route('/saveQuery').put(saveQuery);

module.exports = router;
