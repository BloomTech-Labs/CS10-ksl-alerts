import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input } from 'semantic-ui-react';
import './CreateAlert.css'

export default class CreateAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .put('http://localhost:8000/api/user/saveQuery', {
        ...this.state,
        id: this.props.id
      })
      .then(() => this.props.history.push('/feed'));
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="form-wrapper">
        <h4>Create a new alert</h4>
          <Input
            type="text"
            name="title"
            placeholder="Alert Title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <Input
            type="text"
            name="url"
            placeholder="Query String Link"
            value={this.state.url}
            onChange={this.handleInput}
          />
          <Button onClick={this.handleSubmit}>Create Alert</Button>
      </div>
    );
  }
}
