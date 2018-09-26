import React, { Component } from 'react';
import { Button, Input, Form, Label } from 'semantic-ui-react';
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
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmitPassword = e => {
    e.preventDefault();
    const id = this.props.id;
    const { newPassword, confirmNewPassword } = this.state;

    if (newPassword !== confirmNewPassword) {
      console.log('newPassword and confirmNewPassword do not match!');
      this.setState({ passwordMatchError: true });
      return;
    }

    const token = localStorage.getItem('jwt');
    const requestOptions = {
      headers: { Authorization: token }
    };

    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/user/updatePassword`,
        { id, newPassword },
        requestOptions
      )
      .then(res => {
        this.setState({ passwordUpdateSuccess: true });
        console.log(res);
      })
      .catch(err => {
        this.setState({ passwordUpdateError: true });
        console.log(err);
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="PageContainer">
        <h2>Settings</h2>
        <div className="SettingsContainer">
          <Form className="UpdateEmailForm">
            <Label>Update User Info</Label>
            <Form.Field>
              <Input
                name="newEmail"
                placeholder="Updated Email Address"
                value={this.state.newEmail}
                onChange={this.handleInput}
              />
            </Form.Field>
            <Button
              color="olive"
              size="medium"
              onClick={this.handleSubmitEmail}
            >
              Submit
            </Button>
          </Form>

          <Form className="UpdatePasswordForm">
            <Label>Update Password</Label>
            <Form.Field>
              <Input
                name="currentPassword"
                placeholder="Current Password"
                value={this.state.currentPassword}
                onChange={this.handleInput}
              />
            </Form.Field>
            <Form.Field>
              <Input
                name="newPassword"
                placeholder="New Password"
                value={this.state.newPassword}
                onChange={this.handleInput}
              />
            </Form.Field>
            <Form.Field>
              <Input
                name="confirmNewPassword"
                placeholder="Confirm New Password"
                value={this.state.confirmNewPassword}
                onChange={this.handleInput}
              />
            </Form.Field>
            <Button
              color="olive"
              size="medium"
              onClick={this.handleSubmitPassword}
            >
              Submit
            </Button>
            { this.state.passwordMatchError && <p>Passwords do not match!</p>}
            { this.state.passwordUpdateSuccess && <p>Password was updated successfully!</p> }
            { this.state.passwordUpdateError && <p>There was an error updating your password!</p> }
          </Form>
        </div>
      </div>
    );
  }
}
