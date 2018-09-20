import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

	submitForm = e => {
		e.preventDefault();
		axios
			.post('http://localhost:8000/api/user/signIn', this.state)
			.then(res => {
				// console.log('res:', res.data);
				localStorage.setItem('jwt', res.data.token);

				// console.log('signin props:', this.props);
				this.setState({ email: '', password: ''});				
				console.log(res.data.id);
				this.props.handleSignIn(res.data.id);
				// this.props.history.push('/feed');

				console.log(this.props);

			})
			.catch(err => {
				console.log(err);
			})
	};

	handleInput = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

  render() {
    return (
      <div onSubmit={this.submitForm} className='container'>
				<div className='form-wrapper'>
					<h3 className='header'>Please sign in</h3>
					<label htmlFor='username' />
					<input className='input-box'
						type = 'text'
						name = 'email'
						placeholder = 'Email'
						value = {this.state.email}
						onChange = {this.handleInput}
					/>
					<label htmlFor='password' />
					<input className='input-box'
						type = 'password'
						name = 'password'
						laceholder = 'Password'
						value = {this.state.password}
						onChange = {this.handleInput}
        	/>
					<button  onClick={this.submitForm} className='btn'>Continue</button> 
				</div>
      </div>
    );
  }
}

export default SignIn;