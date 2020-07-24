import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import AddTodo from '../todo/AddTodo';

export default class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [],
      todoItem: {},
      todoListInput: '', // as the user types, their new todo appears here
    };
  }
  // GET-ting the Axios request response
  // Using Axios with Async-Await
  async componentDidMount() {
    // Axios /GET requests go here, when we want data ASAP!
    const { data } = await Axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=20'
    );
    this.setState({ todoItems: data });
  }

  addTodo = async (title) => {
    const { data } = await Axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        title,
        completed: false,
      }
    );
    this.setState({
      todoItems: [...this.state.todoItems, data],
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <AddTodo addTodo={this.addTodo} />
        </div>
        <div className="col-12">
          <ul className="list-group">
            {this.state.todoItems.map((todo, index) => (
              <li className="list-group-item" key={index}>
                <Link to={`/todos/${todo.id}`}> {todo.title} </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
