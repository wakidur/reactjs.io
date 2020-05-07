import React, { Component } from "react";
class CounterComponent extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    arra1: [1, 2, 4, 5],
    increment: 0,
    incrementValueOf: 0
  };

  constructor() {
    // Bind event handler for older version
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    return (
      // Using React Fragment 1
      //   <React.Fragment>
      //     <h1>Hello World</h1>
      //     <button> Increment </button>
      //   </React.Fragment>

      // 2
      //   <div>
      //     <h1>Hello World</h1>
      //     <button> Increment </button>
      //   </div>
      <div>
        {/* <span style={this.styles} className=" badge badge-primary m-2"> */}
        {/* <span className={classes}>
          {this.formatCount()}
        </span> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm mr-3"
        >
          Increment
        </button>
        <button
          onClick={this.incrementValue}
          className="btn btn-secondary btn-sm mr-3"
        >
          Increment Value Of
        </button>
        <button
          onClick={() => this.inlineEvnet("hello")}
          className="btn btn-secondary btn-sm"
        >
         Inline Function
        </button>
        <ul className="list-group mt-5">
          {this.state.tags.map((tag) => (
            <li key={tag} className="list-group-item">
              {tag}
            </li>
          ))}
          {this.state.tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </ul>

        <hr />

        <div>
          {this.state.arra1.length === 0 && "There are no tags!"}
          {this.renderArra1()}
        </div>
      </div>
    );
  }

  handleIncrement() {
    console.log("Increment clicked", this.state.increment);
  }

  incrementValue = () => {
    console.log(this.state.incrementValueOf);
    this.setState({incrementValueOf: this.state.incrementValueOf + 1})
  };

  formatCount() {
    //   return this.state.count === 0 ?  'Zero' : this.state.count;
    // object destructuring
    const { incrementValueOf } = this.state;
    // return count === 0 ? "Zero" : count;
    return incrementValueOf === 0 ? "Zero" : incrementValueOf;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  renderArra1() {
    if (this.state.arra1.length === 0) return <p>There are no tags!</p>;
    return (
      <ul className="list-group">
        {this.state.arra1.map((arr) => (
          <li className="list-group-item" key={arr}>
            {arr}
          </li>
        ))}
      </ul>
    );
  }

  inlineEvnet = (product) => {
    console.log(product);
  }
}

export default CounterComponent;
