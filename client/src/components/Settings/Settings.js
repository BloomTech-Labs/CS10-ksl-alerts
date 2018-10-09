import React, { Component } from 'react';
import { Button, Container, Input, Form, Header } from 'semantic-ui-react';
import './Settings.css';
import axios from 'axios';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userId,
      newEmail: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      passwordMatchError: false,
      passwordUpdateSuccess: false,
      passwordUpdateError: false,
      emailUpdateSuccess: false,
      emailUpdateError: false
    };
  }

  handleSubmitEmail = e => {
    const token = localStorage.getItem('jwt');
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };

    e.preventDefault();
    const newEmail = this.state.newEmail;
    const id = this.props.id;
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/user/updateEmail`,
        { id, newEmail },
        requestOptions
      )
      .then(res => {
        this.setState({ emailUpdateSuccess: true, emailUpdateError: false })
        console.log(res);
      })
      .catch(err => {
        this.setState({ emailUpdateSuccess: false, emailUpdateError: true })
        console.log(err);
      });
  };

  handleSubmitPassword = e => {
    e.preventDefault();
    const id = this.props.id;
    const { currentPassword, newPassword, confirmNewPassword } = this.state;

    if (newPassword !== confirmNewPassword) {
      console.log('newPassword and confirmNewPassword do not match!');
      this.setState({
        passwordMatchError: true,
        passwordUpdateError: false,
        passwordUpdateSuccess: false
      });
      return;
    }

    const token = localStorage.getItem('jwt');
    const requestOptions = {
      headers: { Authorization: token }
    };

    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/user/updatePassword`,
        { id, newPassword, currentPassword },
        requestOptions
      )
      .then(res => {
        this.setState({
          passwordUpdateSuccess: true,
          passwordUpdateError: false,
          passwordMatchError: false
        });
        console.log(res);
      })
      .catch(err => {
        this.setState({
          passwordUpdateError: true,
          passwordUpdateSuccess: false,
          passwordMatchError: false
        });
        console.log(err);
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container className="PageContainer" fluid>
      <div className="form-wrapper">
        <Form className="settings-form" size='big'>
          <Form className="UpdateEmailForm">
            <Header as='h2' className="label" style={{background: '#F8F4E3', fontFamily: 'Karla', color: '#080808'}}>Update User Info</Header>
            <Form.Field className="form-field">
              <Input
                name="newEmail"
                placeholder="Updated Email Address"
                value={this.state.newEmail}
                onChange={this.handleInput}
                style={{width: '400px'}}
              />
            </Form.Field>
            <Button
              size="medium"
              onClick={this.handleSubmitEmail}
              style={{backgroundColor: '#114575', color: 'white', fontFamily: 'Karla'}}
            >
              Submit
            </Button>
            { this.state.emailUpdateSuccess && <p>Email was updated successfully!</p> }
            { this.state.emailUpdateError && <p>Error updating your email!</p> }
          </Form>

          <Form className="UpdatePasswordForm">
            <Header as='h2' className="label" style={{background: '#F8F4E3', fontFamily: 'Karla', color: '#080808'}}>Update Password</Header>
            <Form.Field className="form-field">
              <Input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                value={this.state.currentPassword}
                onChange={this.handleInput}
                style={{width: '400px'}}
              />
            </Form.Field>
            <Form.Field className="form-field">
              <Input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={this.state.newPassword}
                onChange={this.handleInput}
                style={{width: '400px'}}
              />
            </Form.Field>
            <Form.Field className="form-field">
              <Input
                type="password"
                name="confirmNewPassword"
                placeholder="Confirm New Password"
                value={this.state.confirmNewPassword}
                onChange={this.handleInput}
                style={{width: '400px'}}
              />
            </Form.Field>
            <Button
              size="medium"
              onClick={this.handleSubmitPassword}
              style={{backgroundColor: '#114575', color: 'white', fontFamily: 'Karla'}}
            >
              Submit
            </Button>
            {this.state.passwordMatchError && <p>Passwords do not match!</p>}
            {this.state.passwordUpdateSuccess && (
              <p>Password was updated successfully!</p>
            )}
            {this.state.passwordUpdateError && (
              <p>There was an error updating your password!</p>
            )}
          </Form>
          </Form>
        </div>
      </Container>
    );
  }
}
