import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

export default class SpecificTodo extends Component {
  static propTypes = {
    id: PropTypes.number,
  };
  constructor(props) {
    super(props);
    this.state = {
      todoItem: {},
    };
  }

  async componentDidMount() {
    // Object destructuring in JavaScript
    const id = this.props.match.params.id;
    const { data } = await Axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    console.log(data);
    this.setState({ todoItem: data });
  }

  render() {
    const { id, title, userId, completed } = this.state.todoItem;
    return (
      <div>
        <p>{id}</p>
        <p>{title}</p>
        <p>{userId}</p>
      </div>
    );
  }
}
