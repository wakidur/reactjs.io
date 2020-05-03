import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Greeting from './child/Greeting'

const LoginButton = (props) => {
  return <button onClick={props.onClick}>Login</button>;
};
const LogoutButton = (props) => {
  return <button onClick={props.onClick}>Logout</button>;
};

export default class LoginControl extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick = () => {
    console.log('handleLoginClick');
    this.setState((state) => ({ isLoggedIn: true }));
  };

  handleLogoutClick = () => {
    console.log('handleLogoutClick');
    this.setState((state) => ({ isLoggedIn: false }));
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    isLoggedIn
      ? (button = <LogoutButton onClick={this.handleLogoutClick} />)
      : (button = <LoginButton onClick={this.handleLoginClick} />);
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button};
      </div>
    );
  }
}
