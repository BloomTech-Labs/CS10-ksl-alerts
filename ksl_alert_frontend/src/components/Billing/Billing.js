import React, { Component } from 'react';
import { Button, Form, Input, Label } from 'semantic-ui-react';
import './Billing.css';

class Billing extends Component {
  render() {
    return (
      <div>
        <Form className="BillingForm">
          <Label>Billing Info</Label>
          <Form.Field>
            <input type="text" name="cc" placeholder="CC#" />
          </Form.Field>
          <Form.Field>
            <input type="text" name="exp" placeholder="EXP" />
          </Form.Field>
          <Form.Field>
            <input type="text" name="cvv" placeholder="CVV" />
          </Form.Field>
          <Form.Field>
            <input type="checkbox" name="oneMonthSub" /> 1 Month Subs - $20
          </Form.Field>
          <Form.Field>
            <input type="checkbox" name="newPassword" /> 1 Client - $1.99
          </Form.Field>
          <Button color="olive" size="medium">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Billing;
