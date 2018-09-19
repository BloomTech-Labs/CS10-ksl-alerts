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
	const userId = req.body.id;
	console.log(userId)
	User
		.findById(userId)
		.then(user => {
			if (!user) {
				res.status(403).json({ errorMessage: "User not found "});
			} else {
				res.status(200).json(user);
			}			
		})
		.catch(err => {
			res.status(500).json({ errorMessage: "Error fetching user" });
		})
}

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
}


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

/** Save a new query
 * Find User
 * Get User's current queries
 * Add new query
 * Return array of updated queries
 */
const saveQuery = (req, res) => {
	const { title, url, userId } = req.body;
	User
		.findById(userId)
		.then(user => {
			let queries = user.queries;
			let newQuery = {title, url};
			let updatedQueries = [...queries, newQuery];
			console.log(updatedQueries);
			return updatedQueries;
		})
		.then(updatedQueries => {
			User
			.findByIdAndUpdate(userId, {queries: updatedQueries}, {new: true})
			.then(updatedUser => {
				res.status(201).json(updatedUser);
			})
			.catch(error => {
				res.status(500).json({ err: "User could not be updated", error })
			})
		})
		.catch(error => {
			rest.status(500).json({ error: "User could not be found :(" })
		})
}

/*
//user login information update:
const forgotPassword = (req, res) => {
	const {email, password} = req.body;
	if (!email || !password) {
		return (
			res.status(400).json({"error message": "no email or password provided"})
			)
	}
}
// /* user information update --WIP--
// router.route("/update").put((req, res) => {
//   const { id } = req.params;
//   const { email, oldPassword, newPassword } = req.body;
//   if (email && oldPassword && !newPassword)
// })
*/



// refactor routes endpoints
router.route('/').get(restrictedRoute, getAllUsers);
router.route('/signUp').post(signUp);
router.route('/signIn').post(signIn);

// route that require ID 
router.route('/getUser').post(getUserById);
router.route('/:id/update').put(restrictedRoute, update);
router.route('/saveQuery').put(saveQuery);





module.exports = router;
