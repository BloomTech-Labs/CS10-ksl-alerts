import React, { Component } from 'react';
import { Button, Input, Form, Label } from 'semantic-ui-react';
import './Settings.css';
import axios from 'axios';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: this.props.userId,
      email: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    };
  }

  handleSubmitEmail = e => {
    console.log(this.state);
    // e.preventDefault();
    // axios
    //   .put(`${process.env.REACT_APP_BACKEND_URL}/user/updateEmail`, this.state)
    //   .then(res => {

    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  handleSubmitPassword = e => {
    const token = localStorage.getItem('jwt');
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };

    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/user/updatePassword`, this.props.state)
      .then(res => {
        console.log('res:', this.props.state);
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
      <div className="PageContainer">
        <h2>Settings</h2>
        <div className="SettingsContainer">
          <Form className="UpdateEmailForm">
            <Label>Update User Info</Label>
            <Form.Field>
              <Input
                name="email"
                placeholder="Updated Email Address"
                value={this.state.email}
                onChange={this.handleInput}
              />
            </Form.Field>
            <Button onClick={this.handleSubmitEmail}>Submit</Button>
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
            <Button onClick={this.handleSubmitPassword}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}
