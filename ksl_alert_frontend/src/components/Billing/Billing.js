import React, { Component } from 'react';
import Checkout from './Stripe/stripe.js';
import './Billing.css';

class Billing extends Component {
  render() {
    return (
      <div>
        <div className="checkout">
          <div>
            <p>Enjoy unlimited alerts for just $9.99 a month!</p>
            <p>1 month - $9.99</p>
            <Checkout
              name={'Subscription Fee'}
              description={'1 month'}
              amount={9.99}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Billing;
