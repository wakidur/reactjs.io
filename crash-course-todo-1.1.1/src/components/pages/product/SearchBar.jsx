import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  static propTypes = {
    filterText: PropTypes.string,
    inStockOnly: PropTypes.bool,
  };

  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleInStockChangename = (e) => {
    this.props.onInStockChange(e.target.checked);
  };

  render() {
    // object destructuring
    const { filterText, inStockOnly } = this.props;
    return (
      <form>
        <div className="form-group">
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Search..."
            id="Search"
            value={filterText}
            onChange={this.handleFilterTextChange}
            aria-describedby="Search"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={this.handleInStockChangename}
            className="form-check-input"
            name="StockOnly"
            id="StockOnly"
          />
          <label className="form-check-label" htmlFor="StockOnly">
            Only show products in stock
          </label>
        </div>
      </form>
    );
  }
}
