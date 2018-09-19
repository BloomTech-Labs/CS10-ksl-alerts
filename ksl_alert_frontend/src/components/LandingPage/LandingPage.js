import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import ModalToggle from "./ModalToggle";

class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            displayModal: false
        }
    }

    showModal = () => {
        this.setState({ displayModal: !this.state.displayModal});
    }

    render() {
        return (
            <div>
                <h3>Welcome to KSL alerts!!!</h3>
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