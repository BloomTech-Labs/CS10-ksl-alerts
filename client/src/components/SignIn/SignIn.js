import React, { Component } from 'react';
import axios from 'axios';
import { Button, Header, Input, Form, Message } from 'semantic-ui-react';
import './SignIn.css';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    error: false
  };

  handleSubmit = e => {
    this.setState({ loading: true, error: false });
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/signIn`, this.state)
      .then(res => {
        const { id, queries, token } = res.data;

        localStorage.setItem('jwt', token);
        localStorage.setItem('id', id);
        this.props.handleSignIn(id, queries);
        this.setState({ loading: false, error: false });
        this.props.history.push('/feed');
      })
      .catch(err => {
        this.setState({ loading: false, error: true });
        console.error(err);
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div onSubmit={this.submitForm} className="container">
        <div className="form-wrapper">
          <Form loading={this.state.loading}>
            <Header as='h4' className="header">Please sign in</Header>
            <Form.Field>
              <Input
                className="input-box"
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInput}
              />
            </Form.Field>
            <Form.Field>
              <Input
                className="input-box"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput}
              />
            </Form.Field>
            <Message
              negative
              error={!this.state.error}
              header="Error"
              content="There was an error signing in. Please try again or contact support."
            />
            <Button primary size="medium" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default SignIn;
