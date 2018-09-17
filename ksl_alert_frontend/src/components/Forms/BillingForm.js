import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

import React, { Component } from 'react'

class BillingForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    async submit(ev){

    }
  render() {
    return (
        <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    )
  }
}
