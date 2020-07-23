import React, { Component } from 'react';
import ButtonC from './ButtonC';
import GreetingC from './GreetingC';

export default class AppC extends Component {
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
        {/* {this.state.isShow ? <GreetingC greeting={greeting} /> : null} */}
         <GreetingC greeting={greeting} isShow={this.state.isShow} /> 
        <ButtonC onClick={this.toggleShow} />
      </div>
    );
  }
}
