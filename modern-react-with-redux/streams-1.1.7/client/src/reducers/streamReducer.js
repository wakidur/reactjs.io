import _ from "lodash";
import { 
  FETCH_STREAMS, 
  CREATE_STREAM 
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
