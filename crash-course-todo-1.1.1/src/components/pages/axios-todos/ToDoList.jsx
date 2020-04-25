import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class ToDoList extends Component {
  //   static = {};

  constructor() {
    super();
    this.state = {
      todoItems: [],
      todoItem: {},
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
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <ul className="list-group">
            {this.state.todoItems.map((todo, index) => (
              <li className="list-group-item" key={todo.id}>
                  <Link to={`/todos/${todo.id}`}> {todo.title} </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
