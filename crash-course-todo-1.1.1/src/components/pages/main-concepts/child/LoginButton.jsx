import React from 'react';
import PropTypes from 'prop-types';

function LoginButton(props) {
  return (
    <div>
      <button onClick={props.onClick}>Login</button>
    </div>
  );
}

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoginButton;
