import React, { Component } from 'React';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const SignUpPage = () =>
	<div>
		<h1 className="sign-up">Sign Up</h1>
		<SignUpForm/>
	</div>

class SignUpForm extends Component {
	constructor(props) {
		super(props);
	}
	 onSubmit = (event) => {

	 }

	 render() {
		 return (
			 <form onSubmit={this.onSubmit}>
			 
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