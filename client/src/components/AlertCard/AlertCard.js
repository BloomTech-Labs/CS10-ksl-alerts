import React, { Component } from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';
import AlertListings from '../AlertListings/AlertListings.js';
import './AlertCard.css';
import axios from 'axios';

// receiving query props from AlertFeed
class AlertCard extends Component {
  state = {
    displayListings: false    
  };

  toggleListings = () => {
    this.setState({ displayListings: !this.state.displayListings });
  };

  // connect to deleteQuery endpoint
  // require userId and queryId that passing as props from AlertFeed
  // then update the user query
  deleteQuery = e => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/user/deleteQuery`, {
        id: this.props.id,
        queryId: this.props.query._id
      })
      .then(updatedUser => {
        const updatedQueries = updatedUser.data.queries;
        this.props.updateQueries(updatedQueries);
      });
  };

  render() {
    return (
      <div className="AlertCard">
        <Header  as='h3' block onClick={this.toggleListings} style={{ cursor: 'pointer', fontFamily: 'Karla' }}>
          {this.props.query.title}
          <Button className='DeleteButton' onClick={this.deleteQuery}>
            <Icon name='trash' size='large' title='delete?'/>
          </Button>
        </Header>
        <AlertListings
          url={this.props.query.url}
          displayListings={this.state.displayListings}
          query={this.props.query}
          style={{ display: 'flex'}}          
        />
      </div>
    );
  }
}

export default AlertCard;
