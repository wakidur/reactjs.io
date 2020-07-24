import React, { Component } from "react";
import { CareList } from "./card-list/CareList";
import { SearchBox } from "./search-box/SearchBox";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: "",
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    // object destructuring
    const { monsters, searchField } = this.state;
    const filtereMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="container">
        <h1 className="text-center">Monsters Rolodex</h1>
        {/* search bar  */}
        <SearchBox onSearchChange={this.onSearchChange} />
        {/* Monsters list */}
        <CareList monsters={filtereMonsters} />
      </div>
    );
  }
}
