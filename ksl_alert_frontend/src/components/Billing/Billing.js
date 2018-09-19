import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "./Stripe/stripe.js";

export default class Billing extends Component {
  render() {
    return (
      <div>
        <div className="checkout">
          <div>
            <p>1 month - $9.99</p>
            <p>3 months - $19.99</p>
            <p>6 months - $29.99</p>
          </div>
          <div className="buttons">
            <Checkout
              name={"Subscription Fee"}
              description={"1 month"}
              amount={9.99}
            />
            <Checkout
              name={"Subscription Fee"}
              description={"3 months"}
              amount={19.99}
            />
            <Checkout
              name={"Subscription Fee"}
              description={"6 months"}
              amount={29.99}
            />
          </div>
        </div>
      </div>
    );
  }
}
