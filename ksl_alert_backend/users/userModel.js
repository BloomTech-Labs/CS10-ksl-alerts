const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// user model
const UserSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

// hashing middleware 
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) {
            return next(err);
        }
        this.password = hash;
        next();
    });
});

// compare the password when user login.
UserSchema.methods.validatePassword = function(passwordGuess) {
    return bcrypt.compare(passwordGuess, this.password);
};

module.exports = mongoose.model('User', UserSchema);