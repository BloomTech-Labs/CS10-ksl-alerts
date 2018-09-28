import React, { Component } from 'react';
import axios from 'axios';
import { Button, Container, Divider, Input, Form } from 'semantic-ui-react';
import './CreateAlert.css';

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
      .put(`${process.env.REACT_APP_BACKEND_URL}/user/saveQuery`, {
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
      <Container className="create-wrapper" fluid>
        <div className="form-wrapper">
          <h1>Create a new alert</h1>
          <Divider inverted />
          <Form className="signin-form">
            <Form.Field className="form-field">
              <Input
                type="text"
                name="title"
                placeholder="Alert Title"
                value={this.state.title}
                onChange={this.handleInput}
              />
            </Form.Field>
            <Form.Field className="form-field">
              <Input
                type="text"
                name="url"
                placeholder="Query String Link"
                value={this.state.url}
                onChange={this.handleInput}
              />
            </Form.Field>
            <Button color="olive" size="medium" onClick={this.handleSubmit}>Create Alert</Button>
          </Form>
        </div>
      </Container>
    );
  }
}
