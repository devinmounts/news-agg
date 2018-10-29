import React from 'react';
import { withRouter } from 'react-router-dom';


const SignInPage = () => {
  <div>
    <h1>Sign In</h1>
    <SignInForm />
  </div>
}
class SignInForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    }
  }

  onSubmit = (event) => {
    const { email, password } = this.state;
  //  const { history } = this.props;
  }




  render(){
    return(
        <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default SignInPage;
