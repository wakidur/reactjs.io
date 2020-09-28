import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.utils';

import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

import './CartIcon.scss';

export const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state.cart.cartItems),
});

const mapDispatchToProps = {
  toggleCartHidden,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
