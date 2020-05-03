import React, { Component } from 'react';

export default class ClockClass extends Component {
  state = {};
  timerID ;
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  tick() {
      
      this.setState({
          date: new Date(),
      })
  }
  componentDidMount() {
    /**
     * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
     * The componentDidMount() method runs after the component output has been rendered to the DOM. 
     */
    this.timerID = setInterval(() => {
       this.tick() 
    }, 1000);
  }

  componentWillUnmount() {
    /**
     * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
     */
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is  {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
