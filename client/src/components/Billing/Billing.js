import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Header } from 'semantic-ui-react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import Checkout from './Stripe/stripe.js'
import './Billing.css'

class Billing extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      amount: 0.0,
      subscriptionPeriod: 0 // subscription value in months
    }
  }

  onPriceClick (name, description, amount, subscriptionPeriod) {
    this.setState({
      name: name,
      description: description,
      amount: amount,
      subscriptionPeriod: subscriptionPeriod
    })
  }

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
              {/* <Elements> */}
              <div>
                <Header
                  as='h1'
                  style={{ color: '#436386', fontFamily: 'Karla' }}
                >
                  Enjoy unlimited alerts for <br/>just $2.99 a month!
                </Header>
                {/* <Button
                  className='button'
                  color='primary'
                  onClick={() =>
                    this.onPriceClick(
                      'KSL Alerts',
                      '6 month unlimited alerts',
                      5.99,
                      6
                    )}
                >
                  1 month Subscription = 5.99
                </Button> */}
                <Checkout
                  name={`KSL Alerts`}
                  description={'1 month unlimited alerts'}
                  amount={2.99}
                />

              </div>
              {/* </Elements> */}
            </StripeProvider>
          </div>
        </div>
      </Container>
    )
  }
}

export default Billing
