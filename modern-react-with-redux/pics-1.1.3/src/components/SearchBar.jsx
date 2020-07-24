import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

export default class SearchBar extends Component {
  state = {
    term: "",
  };

  static propTypes = {
    onChange: PropTypes.func,
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
    
    this.props.onSubmitSearchValue(this.state.term);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Image Search</Form.Label>
            <Form.Control
              type="text"
              value={this.state.term}
              placeholder="Search "
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
