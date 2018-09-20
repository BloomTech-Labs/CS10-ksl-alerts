import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/user/signUp', this.state)
      .then(res => {
        console.log('Sign up successful');
        return res.data;
      })
      .then(user => {
        axios
          .post('http://localhost:8000/api/user/signIn', this.state)
          .then(res => {
            localStorage.setItem('jwt', res.data.token);

            this.setState({ email: '', password: '' });
            this.props.handleSignIn(res.data.id);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log("Error signing up a new user")
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
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default SignUp;
