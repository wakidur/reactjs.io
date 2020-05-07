import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TemperatureInput extends Component {
  static propTypes = {
    onTemperatureChange: PropTypes.func.isRequired,
    scale: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
  };

  

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit',
    };

    // object destructuring
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <div className="form-group">
          <label htmlFor="temperature">
            Enter temperature in {scaleNames[scale]}:
          </label>
          <input
            type="number"
            id="temperature"
            className="form-control"
            name="temperature"
            placeholder={scaleNames[scale]}
            value={temperature}
            onChange={this.handleChange}
          />
        </div>
      </fieldset>
    );
  }
}
