require('dotenv').config();
const configureStripe = require('stripe');

const { STRIPE_BACKEND_SECRET_KEY_TEST, STRIPE_BACKEND_SECRET_KEY_PRODUCTION } = process.env;

const STRIPE_SECRET_KEY = { production: STRIPE_BACKEND_SECRET_KEY_PRODUCTION, development: STRIPE_BACKEND_SECRET_KEY_TEST,
}[process.env.NODE_ENV];

/**
 * Define the `stripe` instance object.
 * @param {string} STRIPE_SECRET_KEY - Stripe API secret key.
 */
const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;