import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

export default class TemperatureCalculator extends Component {
  /**
   * Local state
   *
   * This is the state we “lifted up” from the inputs, and it will serve as the “source of truth” for both of them.
   */
  
  state = { temperature: '', scale: 'c' };

  toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  /**
   * For example
   * tryConvert('abc', toCelsius) returns an empty string,
   * tryConvert('10.22', toFahrenheit) returns '50.396'
   * @param {*} temperature
   * @param {*} convert
   */
  tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return '';
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };

  handleCelsiusChange = (temperature) => {
    this.setState({
      scale: 'c',
      temperature,
    });
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({
      scale: 'f',
      temperature,
    });
  };

  render() {
    // object destructuring
    const { scale, temperature } = this.state;

    const celsius =
      scale === 'f'
        ? this.tryConvert(temperature, this.toCelsius)
        : temperature;
        
    const fahrenheit =
      scale === 'c'
        ? this.tryConvert(temperature, this.toFahrenheit)
        : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
