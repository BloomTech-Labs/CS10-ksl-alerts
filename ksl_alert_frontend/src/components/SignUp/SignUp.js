import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  submitForm = e => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/user/signUp', this.state)
      .then(res => {
        console.log("Sign up successful")
      })
      .catch(err => {
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
        <h3>Sign Up</h3>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInput}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={this.state.confirmPassword}
          onChange={this.handleInput}
        />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}

export default SignUp;
