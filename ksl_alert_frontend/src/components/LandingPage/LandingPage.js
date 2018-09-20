import React, { Component } from 'react';
import ModalToggle from './ModalToggle';

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
      <div>
        <h3>Welcome.</h3>
        <button onClick={this.showModal}>Get Started</button>
        <ModalToggle
          toggle={this.state.displayModal}
          showModal={this.showModal}
        />
      </div>
    );
  }
}

export default LandingPage;
