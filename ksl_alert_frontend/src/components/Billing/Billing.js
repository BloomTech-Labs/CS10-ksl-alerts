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
        <p>Enjoy unlimited alerts for just $9.99 a month!</p>
        <p>1 month - $9.99</p>
          <Checkout 
            name={"Subscription Fee"}
            description={"1 month"}
            amount={9.99}
          />
           {/* <p>6 months - $Money</p>
          <Checkout
            name={"Subscription Fee"}
            description={"6 months"}
            amount={20}
          />
          <p>12 months - $Money</p>
          <Checkout
            name={"Subscription Fee"}
            description={"12 months"}
            amount={100}
          /> */}
        </div>
      </div>
    </div>
    );
  }
}

export default Billing;
