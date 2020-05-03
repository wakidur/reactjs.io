import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';
import ClockClass from './ClockClass';
import HandlingEvents from './HandlingEvents';
import LoginControl from './LoginControl';
import Mailbox from './child/Mailbox';
import WarningBanner from './child/WarningBanner';

export default class StateAndLifecycle extends Component {
  state = {
    messages: ['React', 'Re: React', 'Re:Re: React', 1, 2, 3, 4, 5],
    showWarning: true,
    posts: [
      {
        id: 1,
        title: 'Hello World',
        content: 'Welcome to learning React!',
      },
      {
        id: 2,
        title: 'Installation',
        content: 'You can install React from npm.',
      },
    ],
  };

  constructor(props) {
    super(props);

    // this.state = {
    //   showWarning: true,
    // };
  }

  handleToggleClick = () => {
    this.setState((state) => ({ showWarning: !state.showWarning }));
  };

  render() {
    const sidebar = (
      <ul>
        {this.state.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
    const content = this.state.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    ));
    return (
      <div>
        <Clock date={new Date()} />
        <hr />
        <ClockClass />
        <hr />
        <HandlingEvents />
        <hr />
        <LoginControl />
        <hr />
        <Mailbox unreadMessages={this.state.messages} />
        <hr />

        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
        <hr />
        <div>
          {sidebar}
          <hr />
          {content}
        </div>
      </div>
    );
  }
}
