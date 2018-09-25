import React, { Component } from 'react';
import axios from 'axios';
import { Button, Segment } from 'semantic-ui-react';
import AlertCard from '../AlertCard/AlertCard';
import './AlertFeed.css'

// use users for now. It needs to change to be saved urls
// then scrape the saved url to show alert feed
export default class AlertFeed extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    queries: this.props.queries,
  };

  // remove token from local storage
  signOut = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt');
      this.props.history.push('/');
    }
    this.props.handleSignOut();
  };

  render() {
    return (
      <div className="feed-wrapper">
        <h2>Alert Feed</h2>
          {this.state.queries.map(query => (
            <Segment>
              <AlertCard query={query}/>
            </Segment>
          ))}
        <Button onClick={this.signOut}>Sign out</Button>
      </div>
    );
  }
}
