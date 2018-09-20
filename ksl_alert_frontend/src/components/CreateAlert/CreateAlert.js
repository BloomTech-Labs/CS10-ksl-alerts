import React, { Component } from 'react';

export default class CreateAlert extends Component {
  render() {
    return (
      <div>
        <h4>Create a new alert</h4>
        <li>
          <input type="text" name="Alert Title" placeholder="Alert Title" />
        </li>
        <li>
          <input
            type="text"
            name="Query String Link"
            placeholder="Query String Link"
          />
        </li>
        <li>
          <button>Create Alert</button>
        </li>
      </div>
    );
  }
}
