import React, { Component } from 'react';
import { Button, Form, Input, Label } from 'semantic-ui-react';
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
            amount={Money}
          />
          <Checkout
            name={"Subscription Fee"}
            description={"6 months"}
            amount={Money}
          />
          <Checkout
            name={"Subscription Fee"}
            description={"12 months"}
            amount={Money}
          />
        </div>
      </div>
    </div>
    );
  }
}

export default Billing;
