import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Amount extends Component {
  state = {
    amount: 0,
  };

  onIncrement = () => {
     this.setState(state => ({amount: state.amount + 1 })) 
  }
  onDecrement = () => {
     this.setState(state => ({amount: state.amount - 1 })) 
  }
  
  render() {
    const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
    const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

    return <div>
        <span> US Dollar: {this.state.amount}</span>
        <button type="button" onClick={this.onIncrement}>+</button>
        <button type="button" onClick={this.onDecrement}>-</button>

        <Euro amount={this.state.amount} />
        <Pound amount={this.state.amount} />
    </div>;
  }
}
