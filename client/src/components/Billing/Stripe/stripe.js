import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const PAYMENT_SERVER_URL = 'http://localhost:8000/api/payments';
const STRIPE_PUBLISHABLE = 'pk_test_bS41glL52zljnAT32tZubD7r';
const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const updateSubscription = (subscription, updateSubscriptionState) => {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };

    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/user/updateSubscription`,
        { id, subscription },
        requestOptions
      )
      .then(res => {
        updateSubscriptionState(subscription);
      })
      .catch(err => {
        console.log(err);
      });
};

const errorPayment = error => {
  alert('Payment Error');
  console.error(error);
};

const onToken = (amount, description, updateSubscriptionState) => token => {
  axios
    .post(
      PAYMENT_SERVER_URL,
      {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromDollarToCent(amount)
      },
    )
    .then(response => {
      alert('Payment Successful!');
      updateSubscription('premium', updateSubscriptionState);
    })
    .catch(error =>{
      errorPayment(error);
    });
}

const Checkout = ({ name, description, amount, updateSubscriptionState }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description, updateSubscriptionState)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
