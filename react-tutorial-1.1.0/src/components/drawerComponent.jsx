import React, { Component } from 'react';

class DrawerComponent extends Component {
  state = {
    expanded: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    // setp 2
    let drawer;

    if (this.state.expanded) {
      drawer = this.renderDrawer1();
    }
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm mr-3"
          onClick={this.onToggleButtonClick}
        >
          ClickIn
        </button>
        {/* Step 1 */}
        {this.renderDrawer()}
        {drawer}
        {/* // Conditional rendering in React using a ternary operator */}
        {this.state.expanded ? this.renderDrawer3() : null}
      </div>
    );
  }

  renderDrawer() {
    // setp 1
    // // Conditional rendering in React using an if statement
    if (this.state.expanded) {
      console.log(this.state.expanded);
      return <h1>Hello ... </h1>;
    } else {
      return (
        <nav>
          <ul>
            <li>
              <a href="#">Some link 1</a>
            </li>
            <li>
              <a href="#">Another link</a>
            </li>
          </ul>
        </nav>
      );
    }
  }
  renderDrawer1() {
    // step 2
    return (
      <nav>
        <ul>
          <li>
            <a href="#">Some link 2</a>
          </li>
          <li>
            <a href="#">Another link</a>
          </li>
        </ul>
      </nav>
    );
  }

  renderDrawer3() {
    // step 3
    // Conditional rendering in React using a ternary operator
    return (
      <nav>
        <ul>
          <li>
            <a href="#">Some link 3</a>
          </li>
          <li>
            <a href="#">Another link</a>
          </li>
        </ul>
      </nav>
    );
  }
  onToggleButtonClick = () => {
    // this.state.expanded = !this.state.expanded;
    this.setState({ expanded: !this.state.expanded });
  };
}

export default DrawerComponent;
