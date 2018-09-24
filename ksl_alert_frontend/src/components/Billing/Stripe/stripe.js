import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const CURRENCY = "USD";
const PAYMENT_SERVER_URL = process.env.NODE_ENV === "production" ? "http://" : "http://localhost:3000";
const STRIPE_PUBLISHABLE = process.env.NODE_ENV === "production" ? "pk_test_8PEVRGD76L9FgpaQaNZiCgRG" : "pk_test_8PEVRGD76L9FgpaQaNZiCgRG";

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  alert("Payment Successful");
};

const errorPayment = data => {
  alert("Payment Error");
};

const onToken = (amount, description) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
