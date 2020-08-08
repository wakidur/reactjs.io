import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
} from "./cart.types";


export const toggleCartHidden = () => async (dispatch) =>
  dispatch({ type: TOGGLE_CART_HIDDEN });

export const addItem = (item) => async (dispatch) =>
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });

export const removeItem = (item) => async (dispatch) =>
  dispatch({
    type: REMOVE_ITEM,
    payload: item,
  });

export const clearItemFromCart = (item) => async (dispatch) =>
  dispatch({
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
  });
