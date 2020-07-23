// step-1

import React, { Component } from 'react';

export default class Forms extends Component {
  state = {
    name: '',
    comment: 'Please write an essay about your favorite DOM element.',
    dropdown: [],
    isGoing: true,
    numberOfGuests: 2,
  };
  

  handleNameChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  handleCommentChange = (event) => {
    console.log(event.target.value);
    this.setState({ comment: event.target.value });
    console.log(this.state.comment);
  };
  handleDropdownChange = (event) => {
    console.log(event.target.value);
    this.setState({ dropdown: event.target.value });
    console.log(this.state.dropdown);
  };

  handleIsGoingChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  getSelectValues = (select) => {
    let result = [];
    let opt;
    const options = select.target && select.target.options;

    for (let i = 0; i < options.length; i++) {
      opt = options[i];
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    this.setState({
      dropdown: result,
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${this.state.comment}`);
    console.log(`${this.state.name}`);
    console.log(`${this.state.dropdown}`);
    console.log(`${this.state.checked}`);
    console.log(`${this.state.numberOfGuests}`);

    console.log(this.state);
  };
  // nfn

  render() {
    return (
      <div>
        {/* <h6>{this.state.name}</h6>
        <h6>{this.state.comment}</h6> */}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleInputChange}
              className="form-control"
              id="name"
              aria-describedby="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dropdown">Pick your favorite flavor:</label>
            <select
              multiple={true}
              //   defaultValue={this.state.dropdown} // Single value select

              defaultValue={['coconut', 'grapefruit']}
              name="dropdown"
              className="form-control"
              id="dropdown"
              onChange={this.getSelectValues}
            >
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea
              name="comment"
              value={this.state.comment}
              onChange={this.handleCommentChange}
              className="form-control"
              id="comment"
              rows="3"
            ></textarea>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="isGoing"
              checked={this.state.isGoing}
              id="isGoing"
              onChange={this.handleIsGoingChange}
            />
            <label className="form-check-label" htmlFor="isGoing">
              Is going:
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="numberOfGuests">Number of guests:</label>
            <input
              type="number"
              className="form-control"
              name="numberOfGuests"
              id="numberOfGuests"
              value={this.state.numberOfGuests}
              placeholder="Number Of Guests"
              onChange={this.handleIsGoingChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <hr />
        <hr />
      </div>
    );
  }
}
