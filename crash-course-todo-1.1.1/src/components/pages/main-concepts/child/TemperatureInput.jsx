import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TemperatureInput extends Component {
  static propTypes = {
    scale: PropTypes.string,
    onTemperatureChange: PropTypes.func,
    temperature: PropTypes.string

  };

  

  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
     // Before:  this.setState({ temperature: e.target.value });
     this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit',
    };
    // Before: const { temperature } = this.state;
    const { temperature, scale } = this.props;
    console.log(scale);
    console.log(temperature);
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
            placeholder="Temperature"
            value={temperature}
            onChange={this.handleChange}
          />
        </div>
      </fieldset>
    );
  }
}
