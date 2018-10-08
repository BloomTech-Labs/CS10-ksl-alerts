import React, { Component } from 'react';
import Checkout from './Stripe/stripe.js';
import { Header, Container } from 'semantic-ui-react';
import './Billing.css';

class Billing extends Component {
  render() {
    return (
      <Container className='BillingContainer' fluid>
        <div className="form-wrapper" style={{border: '#f18e57 solid 2px', background: 'rgba(255,255,255,.8)'}}>
          <div className="checkout">
            <div>
              <Header as='h1' style={{color: '#436386', fontFamily: "Karla"}}>Enjoy unlimited alerts for just $9.99 a month!</Header>
              <Header as='h2' style={{color: '#436386', fontFamily: "Karla"}}>1 month - $9.99</Header>
              <Checkout
                name={'Subscription Fee'}
                description={'1 month'}
                amount={9.99}
              />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Billing;


