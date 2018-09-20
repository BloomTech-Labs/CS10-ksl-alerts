import React, { Component } from 'react';
import ModalToggle from './ModalToggle';
import { Button } from 'semantic-ui-react'
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
      <div className='LandingPage'>
        <h3>Welcome.</h3>
        <Button onClick={this.showModal}>Get Started</Button>
        <ModalToggle
          toggle={this.state.displayModal}
          showModal={this.showModal}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default LandingPage;
