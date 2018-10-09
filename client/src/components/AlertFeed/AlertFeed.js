import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import AlertCard from '../AlertCard/AlertCard';
import './AlertFeed.css';
import TopNav from '../TopNav/TopNav.js';

// use users for now. It needs to change to be saved urls
// then scrape the saved url to show alert feed
export default class AlertFeed extends Component {
  state = {
    queries: this.props.queries
  };

  render() {
    return (
      <Container className="AlertFeed" fluid>
        <TopNav />
        <div className="feed-wrapper">
          <Header as='h1' style={{color: '#F1F0EA', fontFamily: 'Karla'}} >Alert Feed</Header>
          {this.state.queries ? (
            this.state.queries.map(query => (
              <Container key={query._id}>
                <AlertCard query={query} />
              </Container>
            ))
          ) : (
            <p>You have no queries.</p>
          )}
        </div>
      </Container>
    );
  }
}
