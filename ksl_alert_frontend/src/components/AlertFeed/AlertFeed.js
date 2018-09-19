import React, { Component } from "react";
import axios from 'axios';



// use users for now. It needs to change to be saved urls
// then scrape the saved url to show alert feed
export default class AlertFeed extends Component {
	state = {
		users: []
	}

	componentDidMount() {
		const token = localStorage.getItem('jwt');
		const requestOptions = {
			headers: {
				Authorization: token
			}
		};

		// call axios.get to check if can fetch all users. JUST FOR TESTING
		axios
			.get('http://localhost:8000/api/users', requestOptions)
			.then(res => {
				console.log(res.data);
				this.setState({ users: res.data });
			})
			.catch(err => {
				console.log(err);
			})
	}

	// remove token from local storage
	signOut = () => {
		if(localStorage.getItem('jwt')) {
			localStorage.removeItem('jwt');
			this.props.history.push('/');
		}
	}

  render() {
    return (
      <div>
        <p>Alert Feed</p>
				<div>{this.state.users.map(user => <ol key={user.id}>{user.email}</ol>)}</div>
				<button onClick={this.signOut}>Sign out</button>
      </div>
    );
  }
}
