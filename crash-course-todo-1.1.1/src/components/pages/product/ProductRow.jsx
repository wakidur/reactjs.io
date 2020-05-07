import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductRow extends Component {
  static propTypes = {
    product: PropTypes.object,
  };

  render() {
    // object destructuring
    const { product } = this.props;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}
