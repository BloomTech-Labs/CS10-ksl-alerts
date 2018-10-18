import React, { Component } from 'react';
import axios from 'axios';
import { Button, Container, Divider, Header, Input, Form, Message, Icon } from 'semantic-ui-react';
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
            localStorage.setItem('id', res.data.id);

            this.props.handleSignIn(res.data.id, [], 'free');
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

  goToHome = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Container onSubmit={this.submitForm} className="signUpContainer" fluid>
        <div className='home-container'>
          <Icon className='home-icon' name='home' size='big' color='blue' link onClick={this.goToHome} />
        </div>
        <div className="form-wrapper" style={{marginBottom: '90px'}}>       
          <Form loading={this.state.loading}>
          <Header  style={{ fontFamily: 'Karla', fontSize: '4rem', color: '#080808', fontWeight: 'bolder', marginTop: '50px'}}>Sign Up</Header>
            <Divider />
            <Form.Field>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInput}
                style={{ width: '400px', border: 'solid 1px #080808', borderRadius: '.2857142' }}
              />
            </Form.Field>
            <Form.Field>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput}
                style={{ width: '400px', border: 'solid 1px #080808', borderRadius: '.2857142' }}
              />
            </Form.Field>
            <Form.Field>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={this.state.confirmPassword}
                onChange={this.handleInput}
                style={{ width: '400px', border: 'solid 1px #080808', borderRadius: '.2857142' }}
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
            </Form.Field>
            <Button  size="large" onClick={this.handleSubmit} style={{backgroundColor: '#2EC0F9', color: 'white', fontFamily: 'Karla'}}>
                Submit
              </Button>
              
            </Form>
        </div>
      </Container>
    );
  }
}

export default SignUp;
