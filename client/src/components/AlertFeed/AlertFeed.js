import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import AlertCard from '../AlertCard/AlertCard';
import './AlertFeed.css';
import TopNav from '../TopNav/TopNav.js';

export default class AlertFeed extends Component {
  render() {
    let header = '';

    if (this.props.subscription === 'premium') {
      header = null;
    } else {
      header = `You are in the FREE Plan with ${3 - this.props.queries.length} free alerts remaining.`
    }

    return (
      <Container className="AlertFeed" fluid>
        <TopNav />
        <div className="feed-wrapper">
          <Header as='h1' style={{color: '#F1F0EA', fontFamily: 'Karla'}} >
            Alert Feed
          </Header>
          <Header as='h3' style={{color: '#F1F0EA', fontFamily: 'Karla'}} >
            {header} 
          </Header>
          {this.props.queries ? (
            this.props.queries.map(query => (
              <div key={query._id}>
                <Container >
                  <AlertCard 
                    query={query}
                    id={this.props.id}
                    updateQueries={this.props.updateQueries}
                    />
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
