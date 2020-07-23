import React, { Component } from 'react';
import axios from 'axios';
import { Constants, get } from './commonApiMethod';

export default class FetchAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allTodoLists: [],
      isLoading: false,
      error: null,
      hits: [],
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    get(Constants.getFetchApiUrl)
      .then((result) => {
        this.setState({
          allTodoLists: result,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          isLoading: false,
        });
      });

    // Axios
  

    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((result) =>
        this.setState({
          allTodoLists: result.data,
          isLoading: false,
        })
      )
      .catch((error) =>
        this.setState({
          error,
          isLoading: false,
        })
      );
  }

  render() {
    const { allTodoLists, isLoading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
    console.log(allTodoLists);
    return (
      <div>
        <ul className="list-group">
          {allTodoLists.map((item) => (
            <a
              href={item.id}
              className="list-group-item list-group-item-action"
              key={item.id}
            >
              {item.title}
            </a>
          ))}
        </ul>
      </div>
    );
  }
}
