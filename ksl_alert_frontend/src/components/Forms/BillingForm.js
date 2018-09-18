import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

class BillingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }
  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/api/billing", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });
  }
  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(BillingForm);
