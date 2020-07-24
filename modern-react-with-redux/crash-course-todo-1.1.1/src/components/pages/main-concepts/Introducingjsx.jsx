import React, { Component } from 'react';

export default class Introducingjsx extends Component {
  state = {
    date: '',
    seconds: 0,
  };
  name = 'Josh Perez';
  element = (<h1>Hello, {this.name}!</h1>);
  user = {
    firstName: 'Harper',
    lastName: 'Perez',
  };
  userEpt = {};

  formatName = (user) => {
    return `${user.firstName} ${user.lastName}`;
  };

  getGreeting = (user) => {
    if (Object.keys(user).length) {
      return <h1>Hello , {this.formatName(user)}</h1>;
    }
    return <h1>Hello, Stranger</h1>;
  };

  userElement = (<p>Hello, {this.formatName(this.user)}!</p>);

  tick = () => {
    this.setState((state) => ({
      seconds: state.seconds + 1,
      date: new Date().toLocaleTimeString(),
    }));
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <div className="greeting">{this.element}</div>
        <h2>{this.userElement}</h2>
        <div>{this.getGreeting(this.userEpt)}</div>
        {/* You may use quotes to specify string literals as attributes */}
        <div tabIndex="0"> tabIndex </div>
        <div>
          <p>Clock: {this.state.date}</p>
          <p>Seconds: {this.state.seconds}</p>
        </div>
      </div>
    );
  }
}
