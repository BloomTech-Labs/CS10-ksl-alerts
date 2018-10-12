import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const CURRENCY = 'USD';
const PAYMENT_SERVER_URL = 'http://localhost:8000/api/payments';
const STRIPE_PUBLISHABLE = 'pk_test_bS41glL52zljnAT32tZubD7r';



const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios
    .post(
      PAYMENT_SERVER_URL,
      {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromDollarToCent(amount)
      },
      {
        headers: {
          JWT: localStorage.getItem('jwt')
        }
      }
    )
    .then(response => {
      successPayment();
    })
    .catch(error =>{
      errorPayment()
      console.error(error);
    });

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
