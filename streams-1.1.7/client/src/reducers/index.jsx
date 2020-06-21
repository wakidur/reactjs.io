import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducer";

export default combineReducers({
  streams: streamReducer,
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
});
