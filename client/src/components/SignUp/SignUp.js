import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input, Form } from 'semantic-ui-react';
import './SignUp.css';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/signUp`, this.state)
      .then(res => {
        console.log('Sign up successful');
        return res.data;
      })
      .then(user => {
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/user/signIn`, this.state)
          .then(res => {
            localStorage.setItem('jwt', res.data.token);

            this.setState({ email: '', password: '' });
            this.props.handleSignIn(res.data.id);
            this.props.history.push('/feed');
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
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
      <div className="form-wrapper">
        <h3>Sign Up</h3>
        <Form>
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
          <Button color="olive" size="medium" onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
