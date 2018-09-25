//user route middleware
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('./userModel.js');

//for .env file to save sensitive info
require('dotenv').config();

const secret = process.env.SECRET;

// middlewares
// generate token for the login
const generateToken = user => {
  const options = {
    expiresIn: '24h'
  };

  const payload = {};
  return jwt.sign(payload, secret, options);
};

// protect routes. Need to login in order to access the routes
const restrictedRoute = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      req.jwtPayload = decodedToken;

      if (err) {
        res.status(403).json({ errorMessage: 'Please log in.', err });
        return;
      }

      next();
    });
  } else {
    res.status(403).json({ message: 'Please log in.' });
  }
};

// functions that will pass to each endpoints
const getAllUsers = (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Error fetching users' });
    });
};

// get user by ID
const getUserById = (req, res) => {
  const { id } = req.body;
  User.findById(id)
    .then(user => {
      if (!user) {
        res.status(403).json({ errorMessage: 'User not found ' });
      } else {
        res.status(200).json(user);
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Error fetching user' });
    });
};

const signUp = (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  if (!email || !password) {
    res
      .status(403)
      .json({ errorMessage: 'Please provide email and password.' });
  }
  newUser
    .save()
    .then(savedUser => {
      res.status(201).json(savedUser);
    })
    .catch(err => {
      res.status(422).json({ errorMessage: 'Error creating user' });
    });
};

// after signing in, if the password matched, it should return message, token and user id.
// user id will be used for signing in.
const signIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(403).json({ errorMessage: 'User not found ' });
      } else {
        user
          .validatePassword(password)
          .then(match => {
            if (match) {
              const token = generateToken({ email });
              res
                .status(200)
                .json({
                  message: `Welcome back ${email}`,
                  token,
                  id: user._id
                });
            } else {
              res
                .status(404)
                .json({ errorMessage: 'Invalid email or password' });
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
  User.findById(id)
    .then(user => {
      const queries = user.queries;
      const newQuery = { title, url };
      const updatedQueries = [...queries, newQuery];
      return updatedQueries;
    })
    .then(updatedQueries => {
      User.findByIdAndUpdate(id, { queries: updatedQueries }, { new: true })
        .then(updatedUser => {
          res.status(201).json(updatedUser);
        })
        .catch(error => {
          res
            .status(500)
            .json({ errorMessage: 'User could not be updated', error });
        });
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: 'User could not be found :(', error });
    });
};

// update password. Check the old password first if matched, set new password === user.password
const updatePassword = (req, res) => {
  const { email, password, newPassword, confirmNewPassword } = req.body;
  User.findOne({ email })
    .then(user => {
      user
      .validatePassword(password)
      .then(matched => {
        if(!matched) {
          res.status(422).res.json({ errorMessage: 'Current Password is incorrect' });
        } else {
          if(newPassword === confirmNewPassword) {
            user.password = newPassword;
            user
              .save()
              .then(savedNewPassword => {
                res.status(200).json(savedNewPassword);
              })
              .catch(error => {
                res.status(500).json(error);
              });
          } else {
            res.status(422).json({ errorMessage: 'The password does not match' })
          }      
        }
      })
      .catch(error => {
        res.status(500).json(error);
      })
    });
}

// update user's email
// check if the right user by validating the password.
// if the password matched, set new email and the password 
// and save in userModel
const updateEmail = (req, res) => {
  const { password, newEmail, id } = req.body;
  User.findById(id)
  .then(user => {
    if(!user) {
      res.status(404).json({ errorMessage: 'User not found'});
    } else {
      user
        .validatePassword(password)
        .then(matched => {
          if(!matched) {
            res.status(404).json({ errorMessage: 'Invalid password'});
          } else {
              user.email = newEmail;
              user.password = password;
              user
                .save()
                .then(savedNewEmail => {
                  res.status(200).json(savedNewEmail);
                })
                .catch(error => {
                  res.status(500).json(error);
                })             
          }
        })
        .catch(error => {
          res.status(500).json(error);
        });
    }
  })
  .catch(error => {
    res.status(500).json(error);
  });
}

// refactor routes endpoints
router.route('/').get(restrictedRoute, getAllUsers);
router.route('/signUp').post(signUp);
router.route('/signIn').post(signIn);
router.route('/updatePassword').put(restrictedRoute, updatePassword);
router.route('/updateEmail').put(restrictedRoute, updateEmail);

// route that require ID
router.route('/getUser').post(restrictedRoute, getUserById);
router.route('/saveQuery').put(saveQuery);

module.exports = router;
