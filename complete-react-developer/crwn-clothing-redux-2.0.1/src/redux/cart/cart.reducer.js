import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  SELECT_CART_ITEMS_COUNT,
} from './cart.types';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  selectCartItemsCount,
} from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, payload),
      };
    case SELECT_CART_ITEMS_COUNT:
      return {
        ...state,
        itemCount: selectCartItemsCount(state.cartItems, payload),
      };

    default:
      return state;
  }
};
