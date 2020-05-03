import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  console.log(isLoggedIn);
  const UserGreeting = <h1>Welcome back!</h1>;
  const GuestGreeting = <h1>Please sign up.</h1>;
  if(isLoggedIn) return UserGreeting;
  else return GuestGreeting

  
}

Greeting.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Greeting;
