import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  // state
  state = {
    title: '',
  };

  // Submit Form
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  // Input OnChange Event
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            className="form-control"
            placeholder="Add Toto"
            aria-label="Add Todo"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
