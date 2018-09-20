import React, { Component } from "react";
import axios from 'axios';



// use users for now. It needs to change to be saved urls
// then scrape the saved url to show alert feed
export default class AlertFeed extends Component {
	state = {
		queries: []
	}

	componentDidMount() {
		const token = localStorage.getItem('jwt');
		const requestOptions = {
			headers: {
				Authorization: token
			}
		};

		// 
		axios
			.post('http://localhost:8000/api/user/getUser', { id: this.props.id }, requestOptions)
			.then(res => {
				console.log(res.data);
				this.setState({ queries: res.data.queries });
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
				<div>{this.state.queries.map(query => <ol key={query._id}>{query.url}</ol>)}</div>
				{/* <button onClick={this.signOut}>Sign out</button> */}
      </div>
    );
  }
}
