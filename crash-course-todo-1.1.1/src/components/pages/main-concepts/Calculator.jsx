import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoilingVerdict from './child/BoilingVerdict';

export default class Calculator extends Component {
  // static propTypes = {
  //     prop: PropTypes
  // }

  state = {
    temperature: '',
  };

  handleChange = (e) => {
    this.setState({ temperature: e.target.value });
  };

  render() {
    const { temperature } = this.state;
    return (
      <fieldset>
        <div className="form-group">
          <label htmlFor="temperature">Enter temperature in Celsius:</label>
          <input
            type="text"
            id="temperature"
            className="form-control"
            value={temperature}
            onChange={this.handleChange}
          />
        </div>
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
