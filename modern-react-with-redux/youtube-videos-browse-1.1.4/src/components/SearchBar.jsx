import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

export default class SearchBar extends Component {
  state = {
    term: "",
  };

  static propTypes = {
    onFormSubmit: PropTypes.func,
  };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
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
              onChange={this.onInputChange}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
