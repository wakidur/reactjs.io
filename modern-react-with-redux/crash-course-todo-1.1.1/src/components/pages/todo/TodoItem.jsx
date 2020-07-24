import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  // PropTypes
  static propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  };

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    // Object destructuring
    const { id, title } = this.props.todo;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="custom-control custom-checkbox">
          <input
            onChange={this.props.markComplete.bind(this, id)}
            type="checkbox"
            className="custom-control-input"
            id={id}
          />
          <label style={this.getStyle()} className="custom-control-label" htmlFor={id}>
            {title}
          </label>
        </div>
        <button
          type="button"
          onClick={this.props.delTodo.bind(this, id)}
          className="btn btn-danger rounded-circle"
        >
          &times;
        </button>
      </li>
    );
  }
}
