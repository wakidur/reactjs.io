import React from 'react';
import PropTypes from 'prop-types';

const ButtonC = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Toggle Show
  </button>
);

ButtonC.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonC;
