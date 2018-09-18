import React, { Component } from "react";
import {Elements, StripeProvider} from 'react-stripe-elements';
import BillingForm from "../Forms/BillingForm";

export default class Billing extends Component {
  render() {
    return (
      <div>
        <p>Payment Info</p>
        <input type="text" name="cc" placeholder="CC#" />
        <input type="text" name="exp" placeholder="EXP" />
        <input type="text" name="cvv" placeholder="CVV" />
        <input type="checkbox" name="oneMonthSub">
          1 Month Subs - $20
        </input>
        <input type="checkbox" name="newPassword">
          1 Client - $1.99
        </input>
        <StripeProvider apiKey="pk_test_8PEVRGD76L9FgpaQaNZiCgRG">
          <div className="billing-form">
            <Elements>
              <BillingForm />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    );
  }
}
