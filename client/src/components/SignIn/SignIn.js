import React, { Component } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Header,
  Input,
  Form,
  Message,
  Icon
} from 'semantic-ui-react';
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
        const { id, queries, token, subscription } = res.data;

        localStorage.setItem('jwt', token);
        localStorage.setItem('id', id);
        this.props.handleSignIn(id, queries, subscription);
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

  goToHome = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Container onSubmit={this.submitForm} className="signinContainer" fluid>
        <div className="home-container">
          <Icon
            className="home-icon"
            name="home"
            size="big"
            color="blue"
            link
            onClick={this.goToHome}
          />
        </div>
        <div
          className="form-wrapper"
          style={{
            marginBottom: 'auto',
            backgroundColor: 'rgba(255,255,255,.065'
          }}
        >
          <Form loading={this.state.loading}>
            <Header
              className="header"
              style={{
                fontFamily: 'Karla',
                color: '#311E10',
                fontSize: '2.7rem',
                fontWeight: 'bolder'
              }}
            >
              Please Sign In
            </Header>
            <Form.Field>
              <Input
                className="input-box"
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInput}
                style={{ width: '400px' }}
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
                style={{ width: '400px' }}
              />
            </Form.Field>
            <Message
              negative
              error={!this.state.error}
              header="Error"
              content="There was an error signing in. Please try again or contact support."
            />
            <Button
              size="medium"
              style={{
                backgroundColor: '#311E10',
                color: 'white',
                fontFamily: 'Karla'
              }}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default SignIn;
