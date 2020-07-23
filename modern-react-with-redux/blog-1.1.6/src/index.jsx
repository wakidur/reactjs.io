import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from "./components/App";
import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
