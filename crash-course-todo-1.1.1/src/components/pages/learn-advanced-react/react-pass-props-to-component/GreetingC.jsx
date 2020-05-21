import React from 'react';
import PropTypes from 'prop-types';
// Arrow function && object destructuring
const GreetingC = ({ greeting, isShow }) => isShow ? <h1>{greeting}</h1> : null;

GreetingC.propTypes = {
  greeting: PropTypes.string,
  isShow: PropTypes.bool.isRequired
};

export default GreetingC;
