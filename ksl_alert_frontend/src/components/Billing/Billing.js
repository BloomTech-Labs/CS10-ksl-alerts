import React, { Component } from 'react';
import { Elements, StripeProvider } from "react-stripe-elements";
import Checkout from "./Stripe/stripe.js";
import './Billing.css';

class Billing extends Component {
  render() {
    return (
      <div>
      <div className="checkout">
        <div>
          <p>1 month - $Money</p>
          <p>6 months - $Money</p>
          <p>12 months - $Money</p>
        </div>
        <div className="buttons">
          <Checkout
            name={"Subscription Fee"}
            description={"1 month"}
            amount={1.00}
          />
          <Checkout
            name={"Subscription Fee"}
            description={"6 months"}
            amount={20.00}
          />
          <Checkout
            name={"Subscription Fee"}
            description={"12 months"}
            amount={100.00}
          />
        </div>
      </div>
    </div>
    );
  }
}

export default Billing;
