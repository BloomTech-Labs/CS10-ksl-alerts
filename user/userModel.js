const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// user model
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  // one to many relationship - one user can save many urls.
  queries: [
    {
      title: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  stripeId: {
    type: String,
    required: false,
  },
  subscription: {
    type: Boolean,
    default: false,
    // description: String,
    // subscriptionPeriod: Number,
  },
});

// hashing middleware
UserSchema.pre("save", function(next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    next();
  });
});

// Hashes new password before updating User model
UserSchema.pre("findOneAndUpdate", function(next) {
  if (this._update.password)
    this._update.password = bcrypt.hashSync(this._update.password, 10);
  next();
});

// compare the password when user login.
UserSchema.methods.validatePassword = function(passwordGuess) {
  return bcrypt.compare(passwordGuess, this.password);
};

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;
