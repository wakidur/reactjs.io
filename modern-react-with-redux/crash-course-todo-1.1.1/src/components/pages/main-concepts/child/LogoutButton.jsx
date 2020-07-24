import React from 'react';
import PropTypes from 'prop-types';

function LogoutButton(props) {
  return (
    <div>
      <button onClick={props.onClick}>Logout</button>
    </div>
  );
}

LogoutButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LogoutButton;
