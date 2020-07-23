import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  static propTypes = {
    filterText: PropTypes.string.isRequired,
    inStockOnly: PropTypes.bool.isRequired,
    products: PropTypes.array.isRequired,
  };

  

  render() {
    // object destructuring
    const { filterText, inStockOnly, products } = this.props;
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) return;

      if (inStockOnly && !product.stocked) return;

      if (product.category !== lastCategory)
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );

      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
