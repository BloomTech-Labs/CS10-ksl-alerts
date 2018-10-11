import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { Elements, StripeProvider } from 'react-stripe-elements';
import Checkout from './Stripe/stripe.js';
import './Billing.css';

class Billing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      amount: 0.0,
      subscriptionPeriod: 0 // subscription value in months
    };
  }

  onPriceClick(name, description, amount, subscriptionPeriod) {
    this.setState({ 
      name: name, 
      description: description, 
      amount: amount, 
      subscriptionPeriod: subscriptionPeriod 
    });
  }

  render() {
    return (
      <Container>
        <div>
          <h3 className="element"> Billing </h3>
          <label className="element"> Billing Info</label>
          <StripeProvider apiKey="pk_test_bS41glL52zljnAT32tZubD7r">
            <Elements>
              <Row>
                <Col md="4">
                  <Card>
                    <CardBody>
                      <CardTitle>
                        1 month unlimited alerts Trial Level
                      </CardTitle>

                      <Button
                        className="button"
                        color="primary"
                        onClick={() =>
                          this.onPriceClick(
                            'KSL Alerts', 
                            '1 month unlimited alerts', 
                            2.99, 
                            1
                          )
                        }
                      >
                        1 month Subscription = 2.99
                      </Button>
                      <Checkout
                        name={'KSL Alerts'}
                        description={'1 month unlimited alerts'}
                        amount={2.99}
                      />
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card>
                    <CardBody>
                      <CardTitle>6 month unlimited alerts</CardTitle>
                      <Button
                        className="button"
                        color="primary"
                        onClick={() =>
                          this.onPriceClick(
                            'KSL Alerts', 
                            '6 month unlimited alerts', 
                            9.99, 
                            6
                          )
                        }
                      >
                        6 month Subscription = 9.99
                      </Button>
                      <Checkout
                        name={`KSL Alerts`}
                        description={'6 month unlimited alerts'}
                        amount={9.99}
                      />
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card>
                    <CardBody>
                      <CardTitle>1 year unlimited alerts</CardTitle>
                      <Button
                        className="button"
                        color="primary"
                        onClick={() =>
                          this.onPriceClick(
                            'KSL Alerts', 
                            '1 year unlimited alerts', 
                            19.99, 
                            12
                          )
                        }
                      >
                        1 Year Subscription = 19.99
                      </Button>
                      <Checkout
                        name={'KSL Alerts'}
                        description={'1 year unlimited alerts'}
                        amount={19.99}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Elements>
          </StripeProvider>
        </div>
      </Container>
    );
  }
}

export default Billing;
