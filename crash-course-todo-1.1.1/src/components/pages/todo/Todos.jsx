import React, { Component } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

export class Todos extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      todos: [],
      todoItems: [],
      todoItem: {}
    }
  }

  // Lifecycle Hooks
  componentDidMount() {
    // Axios /GET requests go here, when we want data ASAP!
    // Using Axios with .then() .catch()
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
  markComplete = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      }),
    });
  };

  // Delete Todo
  delTodo = (id) => {
    console.log(id);
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((result) => {
        console.log(result);
        this.setState({
          todos: [...this.state.todos.filter((item) => item.id !== id)],
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // Add Todo
   addTodo = (title) => {
      console.log(title);
      axios
        .post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed: false,
        })
        .then((result) => {
          console.log(result);
          result.data.id = result.data.id += 1;
          console.log(result.data);
          this.setState({
            todos: [...this.state.todos, result.data],
          });
        })
        .catch((err) => {
          console.error(err);
        });
    };
  
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h1>Todo List</h1>
        </div>
        <div className="col-12">
          <AddTodo addTodo={this.addTodo} />
        </div>
        <div className="col-12">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <p className=" mb-0 fr">Total Todo Item</p>
              <span className="badge badge-primary badge-pill">
                {this.state.todos.length}
              </span>
            </li>
            {this.state.todos.map((item) => (
              <TodoItem
                key={item.id}
                todo={item}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todos;
