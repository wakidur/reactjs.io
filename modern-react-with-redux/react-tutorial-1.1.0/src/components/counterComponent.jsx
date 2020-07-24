import React, { Component } from 'react';
class CounterComponent extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax cll and get new data from the server
      console.log(prevProps.counter.value);
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }
  formatCount() {
    // object destructuring
    const { value } = this.props.counter;
    // return count === 0 ? "Zero" : count;
    return value === 0 ? 'Zero' : value;
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  styles = {
    fontSize: 10,
    fontWeight: 'bold',
  };

  render() {
    console.log(' Counter - Rendered');
    return (
      <div className=" mb-3 ">
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm mr-3"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default CounterComponent;
