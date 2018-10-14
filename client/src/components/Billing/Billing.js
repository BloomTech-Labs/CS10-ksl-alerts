import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Header } from 'semantic-ui-react'
import { StripeProvider } from 'react-stripe-elements'
import Checkout from './Stripe/stripe.js'
import './Billing.css'

class Billing extends Component {
  render () {
    return (
      <Container className='BillingContainer' fluid>
        <div
          className='form-wrapper'
          style={{
            border: '#f18e57 solid 2px',
            background: 'rgba(255,255,255,.6)',
            marginBottom: '100px'
          }}
        >
          <div className='checkout'>
            <StripeProvider apiKey='pk_test_bS41glL52zljnAT32tZubD7r'>
              <div>
                <Header
                  as='h1'
                  style={{ color: '#436386', fontFamily: 'Karla' }}
                >
                  Enjoy unlimited alerts for <br/>just $2.99 a month!
                </Header>
                <Checkout
                  name={`KSL Alerts`}
                  description={'1 month unlimited alerts'}
                  amount={2.99}
                  updateSubscriptionState={this.props.updateSubscriptionState}
                />
              </div>
            </StripeProvider>
          </div>
        </div>
      </Container>
    )
  }
}

export default Billing;
