import React, { Component } from 'react';
import { Button, Input, Form, Label } from 'semantic-ui-react';
import './Settings.css';

export default class Settings extends Component {
  render() {
    return (
      <div className="PageContainer">
        <h2>Settings</h2>
        <div className="SettingsContainer">
          <Form className="UpdateEmailForm">
            <Label>Update User Info</Label>
            <Form.Field>
              <Input name="email" placeholder="Updated Email Address" />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>

          <Form className="UpdatePasswordForm">
            <Label>Update Password</Label>
            <Form.Field>
              <Input name="currentPassword" placeholder="Current Password" />
            </Form.Field>
            <Form.Field>
              <Input name="newPassword" placeholder="New Password" />
            </Form.Field>
            <Form.Field>
              <Input
                name="confirmNewPassword"
                placeholder="Confirm New Password"
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}
