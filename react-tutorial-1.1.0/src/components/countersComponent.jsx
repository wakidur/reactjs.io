import React, { Component } from 'react';
import CounterComponent from './counterComponent';
import DrawerComponent from './drawerComponent';

class CountersComponent extends Component {
  render() {
    console.log(' Counters - Rendered');
    // Destructuring Arguments
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div className="card mt-5">
        <div className=" card-body">
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            Reset
          </button>
          {counters.map((item) => (
            <CounterComponent
              key={item.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={item}
            />
          ))}
        </div>
        <div className=" card-footer">
          <DrawerComponent />
        </div>
      </div>
    );
  }
}

export default CountersComponent;
