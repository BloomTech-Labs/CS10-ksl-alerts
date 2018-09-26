import React, { Component } from 'react';
import ModalToggle from './ModalToggle';
import { Button, Container, Header } from 'semantic-ui-react'
import './LandingPage.css'

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
          <Header className="HeaderText" as="h1">Welcome KSL Alerts</Header>
          <Button  color="olive" size="massive" onClick={this.showModal}>Get Started</Button>
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
