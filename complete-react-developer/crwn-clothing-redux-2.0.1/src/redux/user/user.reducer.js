import { SET_CURRENT_USER } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  console.log(state);
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
