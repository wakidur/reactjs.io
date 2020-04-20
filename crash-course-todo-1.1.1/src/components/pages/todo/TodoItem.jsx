import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    // markComplete: PropTypes.func.isRequired,
    // delTodo: PropTypes.func.isRequired,
  };

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    // Object destructuring
    console.log(this.props.todo);
    const { id, title } = this.props.todo;
    return (
      <li
        style={this.getStyle()}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <div className="custom-control custom-checkbox">
          <input
            onChange={this.props.markComplete.bind(this, id)}
            type="checkbox"
            className="custom-control-input"
            id={id}
          />
          <label className="custom-control-label" htmlFor={id}>
            {title}
          </label>
        </div>
        <button
          type="button"
          onClick={this.props.delTodo.bind(this, id)}
          className="btn btn-primary"
        >
          Primary
        </button>
      </li>
    );
  }
}
