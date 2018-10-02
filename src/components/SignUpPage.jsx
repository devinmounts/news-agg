import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

const SignUpPage = () => {
  <div>
    <h1>Sign Up</h1>
    <SignUpForm />
  </div>
}

  const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value  })
};


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null;
    }
  }
}
