import React, { Component } from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripeCheckoutButton';
import { selectCartTotal } from '../../redux/cart/cart.utils';
import { StripePublishableKey } from '../../utilities/constant';

import './CheckoutPage.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="d-flex justify-content-between w-100 mt-10">
      <div style={{ marginTop: 30 }}>
        <StripeCheckoutButton price={total} />
      </div>
      <div className="total">TOTAL: ${total}</div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  total: selectCartTotal(state.cart.cartItems),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
