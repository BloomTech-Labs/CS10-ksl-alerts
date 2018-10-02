import React, { Component } from 'react';
import { Button, Container, Segment } from 'semantic-ui-react';
import AlertCard from '../AlertCard/AlertCard';
import './AlertFeed.css';
import TopNav from '../TopNav/TopNav.js';

// use users for now. It needs to change to be saved urls
// then scrape the saved url to show alert feed
export default class AlertFeed extends Component {
  state = {
    queries: this.props.queries
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
      <Container className="AlertFeed" fluid>
        <TopNav />
        <div className="feed-wrapper">
          <h2>Alert Feed</h2>
          {this.state.queries ? (
            this.state.queries.map(query => (
              <Segment key={query._id}>
                <AlertCard query={query} />
              </Segment>
            ))
          ) : (
            <p>You have no queries.</p>
          )}
          <Button primary size="medium" onClick={this.signOut}>
            Sign out
          </Button>
        </div>
      </Container>
    );
  }
}
