import React, { Component } from 'react';
import LogoutButton from './child/LogoutButton';
import LoginButton from './child/LoginButton';

export default class HandlingEvents extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true,
      isLoggedIn: false,
    };
  }

  handleClick = () => {
    // This syntax ensures 'this' is bound within handleClick
    // Worning: this is *experimental* syntax.
    console.log('This is: ', this);
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };
  handleClick1(e) {
    console.log(e.target);
    // This syntax ensures 'this' is bound within handleClick
    // Worning: this is *experimental* syntax.
    console.log('This is: ', this);
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) button = <LogoutButton onClick={this.handleLogoutClick} />;
    else button = <LoginButton onClick={this.handleLoginClick} />;
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'NO' : 'OFF'}
        </button>
        <button onClick={(e) => this.handleClick1(e)}>
          {this.state.isToggleOn ? 'NOO' : 'OFFF'}
        </button>
        {button}
      </div>
    );
  }
}
