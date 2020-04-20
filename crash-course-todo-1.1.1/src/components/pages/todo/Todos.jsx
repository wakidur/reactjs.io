import React, { Component } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

export class Todos extends Component {
  state = {
    todos: [],
  };

  // Lifecycle Hooks
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((result) => {
        this.setState({ todos: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Toggle Component
  markComplete = id => {
    console.log(id);
  }

  // Delete Todo
  delTodo = id => {
    console.log(id);
  }
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h1>Todo List</h1>
        </div>
        <div className="col-12">
          <ul className="list-group">
            {this.state.todos.map((item) => (
              <TodoItem key={item.id} todo={item} markComplete={this.markComplete} delTodo={this.delTodo} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todos;
