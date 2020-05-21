import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Amount extends Component {
  state = {
    amount: 0,
  };

  onIncrement = () => {
    this.setState((state) => ({ amount: state.amount + 1 }));
  };
  onDecrement = () => {
    this.setState((state) => ({ amount: state.amount - 1 }));
  };

  render() {
    return (
      <div>
        <span> US Dollar: {this.state.amount}</span>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        {this.props.children(this.state.amount)}
      </div>
    );
  }
}
