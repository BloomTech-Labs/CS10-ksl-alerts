import React, { Component } from 'react';
import { Container, Header, Label, Icon } from 'semantic-ui-react';
import AlertCard from '../AlertCard/AlertCard';
import './AlertFeed.css';
import axios from "axios";
import TopNav from '../TopNav/TopNav.js';

export default class AlertFeed extends Component {
  state = {
    id: this.props.id,
    queries: this.props.queries
  };


  deleteQuery = e => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/user/deleteQuery`, {
        id: this.props.id
      })
      .then(updatedUser => {
        const updatedQueries = updatedUser.data.queries;
        this.props.updateQueries(updatedQueries);
      });
  }

  render() {
    return (
      <Container className="AlertFeed" fluid>
        <TopNav />
        <div className="feed-wrapper">
          <Header as='h1' block>Alert Feed</Header>
          {this.state.queries ? (
            this.state.queries.map(query => (
              <div>
                <Label style={{ float: 'right' }}>
                  <Icon name='delete' size='large' />
                </Label>
                <Container key={query._id}>
                  <AlertCard query={query} />
                </Container>
              </div>
            ))
          ) : (
            <p>You have no queries.</p>
          )}
        </div>
      </Container>
    );
  }
}
