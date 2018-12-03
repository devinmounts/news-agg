import React, { Component } from 'React';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const SignUpPage = () =>
	<div>
		<h1 className="sign-up">Sign Up</h1>
		<SignUpForm/>
	</div>

const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
};

const byPropKey = (propertyName, value) => () => ({
	[propertyName]: value,
});

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		
    this.state = {...INITIAL_STATE };
	}
	//  onSubmit = (event) => {

	//  }

	 render() {
		const {
			username,
			email,
			passwordOne,
			passwordTwo,
			error,
		} = this.state

		const isInvalid = 
			passwordOne !== paswordTwo ||
			passwordOne === '' ||
			email === '' ||
			username === '';

		return (
			<form onSubmit={this.onSubmit}>
				<input 
				value={username}
				onChange={event => this.setState(byPropKey('username', event.target.value))}
				placeholder='Full Name'
				type="text"
				/>
				<input 
				value={email}
				onChange={event => this.setState(byPropKey('email', event.target.value))}
				placeholder="Email"
				type="text"
				/>
				<input 
				value={passwordOne}
				onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
				placeholder="Password"
				type="password"
				/>
				<input 
				value={passwordTwo}
				onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
				placeholder="Confirm Password"
				type="password"
				/>
				<button disabled={isInvalid} type='submit'>
					Sign Up
				</button>

				{error && <p>{error.message}</p>}
			</form>
		);
	}
}

const SignUpLink = () =>
	<p className="signup-link">Don't have an account
		{' '}
	 	<Link to={routes.SIGN_UP}>Sign Up</Link>
	</p>

	export default SignUpPage;

	export {
		SignUpForm,
		SignUpLink,
	};
