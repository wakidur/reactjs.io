import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({ todos, isLoadingTodos }) {
  if (isLoadingTodos) {
    return (
      <div>
        <p>Loading Todos...</p>
      </div>
    );
  }

  if (!todos) {
    return null;
  }

  if (!todos.length) {
    return (
      <div>
        <p>You have no Todos.</p>
      </div>
    );
  }
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  isLoadingTodos: PropTypes.bool.isRequired,
};

export default TodoList;
