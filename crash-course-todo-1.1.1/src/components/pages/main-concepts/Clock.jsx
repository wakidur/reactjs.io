import React from 'react';
import PropTypes from 'prop-types';

function Clock(props) {
  return (
    <div>
      <h1> Hello, world!</h1>
      <h2> It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

Clock.propTypes = {
  date: PropTypes.any.isRequired,
};

export default Clock;
