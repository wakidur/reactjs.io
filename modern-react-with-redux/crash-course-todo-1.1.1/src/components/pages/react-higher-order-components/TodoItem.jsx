import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo }) {
  return <div>{todo.name}</div>;
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
