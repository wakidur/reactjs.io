import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCategoryRow extends Component {
  static propTypes = {
    category: PropTypes.string,
  };
  
  render() {
    // object destructuring
    const { category } = this.props;
    return (
      <tr>
        <th colSpan="2" scope="col">
          {category}
        </th>
      </tr>
    );
  }
}
