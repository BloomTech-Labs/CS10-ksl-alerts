import React, { Component } from 'react';
import ModalToggle from './ModalToggle';
import { Button, Container, Header } from 'semantic-ui-react';
import './LandingPage.css';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      displayModal: false
    };
  }

  showModal = () => {
    this.setState({ displayModal: !this.state.displayModal });
  };

  render() {
    return (
      <Container className="LandingPageWrapper" fluid>
        <div className="LandingPage">
          <Header
            className="HeaderText"
            as="h1"
            style={{
              fontFamily: 'Noto Sans',
              fontWeight: '700',
              color: '#646B8C'
            }}
          >
            Welcome to KSL Alerts
          </Header>
          <Header
            className="SubHeaderText"
            as="h3"
            style={{ fontFamily: 'Noto Sans', color: '#646B8C' }}
          >
            All of your <em>Classifieds</em> searches in one place.
          </Header>
          <Button
            size="massive"
            style={{
              backgroundColor: '#4EA3CE',
              color: 'white',
              fontFamily: 'Noto Sans'
            }}
            onClick={this.showModal}
            className="GetStartedButton"
          >
            Get Started
          </Button>
          <ModalToggle
            toggle={this.state.displayModal}
            showModal={this.showModal}
            history={this.props.history}
          />
        </div>
      </Container>
    );
  }
}

export default LandingPage;
