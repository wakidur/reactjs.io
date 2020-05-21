import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Greeting from './Greeting';

export default class AppB extends Component {
//   static propTypes = {
//     prop: PropTypes,
//   };

  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  toggleShow = () => {
    this.setState((state) => ({ isShow: !state.isShow }));
  };
  render() {
    const greeting = 'Welcome to React';
    return (
      <div>
        {this.state.isShow ? <Greeting greeting={greeting} isShow={this.state.isShow} /> : null}
        <button onClick={this.toggleShow} type="button">
          Toggle Show
        </button>
      </div>
    );
  }
}
