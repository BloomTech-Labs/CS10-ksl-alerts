import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import AlertCard from '../AlertCard/AlertCard';
import './AlertFeed.css'

// use users for now. It needs to change to be saved urls
// then scrape the saved url to show alert feed
export default class AlertFeed extends Component {
  state = {
    queries: []
  };

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };

    //
    axios
      .post(
        'http://localhost:8000/api/user/getUser',
        { id: this.props.id },
        requestOptions
      )
      .then(res => {
        console.log(res.data);
        this.setState({ queries: res.data.queries });
      })
      .catch(err => {
        console.log(err);
      });
  }

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
            <AlertCard query={query}/>
          ))}
        <Button onClick={this.signOut}>Sign out</Button>
      </div>
    );
  }
}
