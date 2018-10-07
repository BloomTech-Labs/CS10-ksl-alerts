import React, { Component } from 'react';
import axios from 'axios';
import { Button, Header, Input, Form, Message } from 'semantic-ui-react';
import './SignUp.css';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: false,
    loading: false,
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.password !== this.state.confirmPassword) return;
    if (this.state.password.length < 6) return;

    this.setState({ error: false, loading: true });
    // Sign up a new User
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/signUp`, this.state)
      .then(res => {
        console.log('Sign up successful');
        return res.data;
      })
      .then(user => {
        // Login User with newly created credentials
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/user/signIn`, this.state)
          .then(res => {
            localStorage.setItem('jwt', res.data.token);

            this.setState({
              email: '',
              password: '',
              error: false,
              loading: false
            });

            this.props.handleSignIn(res.data.id);
            this.props.history.push('/feed');
          })
          // Error logging in
          .catch(err => {
            this.setState({ error: true, loading: false });
            console.log(err);
          });
      })
      // Error creating a new User
      .catch(err => {
        this.setState({ error: true, loading: false });
        console.log('Error signing up a new user');
        console.log(err);
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {/* <Header as='h3'>Sign Up</Header> */}
        <Form loading={this.state.loading}>
          <Form.Field>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              onChange={this.handleInput}
            />
          </Form.Field>
          <Message
            negative
            error={!this.state.error}
            header="Error"
            content="There was an error signing up. Please try again or contact support."
          />
          <Message
            negative
            error={this.state.password === this.state.confirmPassword}
            content="Your passwords do not match!"
          />
          {this.state.password.length > 0 ? (
            <Message
              negative
              error={this.state.password.length >= 6}
              content="Your password is too short!"
            />
          ) : null}
          <Button primary size="medium" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
