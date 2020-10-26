import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

import { StripePublishableKey } from '../../utilities/constant';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful!');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={StripePublishableKey}
    />
  );
};

StripeCheckoutButton.propTypes = {
  PropTypes: PropTypes.number.isRequired,
};

export default StripeCheckoutButton;
