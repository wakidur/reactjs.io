import React, { Component } from 'react';
import Greeting from './Greeting';

export default class AppA extends Component {
  render() {
    
    return (
      <div>
        {/* You can pass data in React by defining custom HTML attributes to which you assign your data with JSX syntax. */}
        <Greeting greeting="Welcome to React" />
      </div>
    );
  }
}
