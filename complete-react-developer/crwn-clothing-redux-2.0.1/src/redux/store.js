import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import RootReducer from "./root-reducer";

// const middlewares = [logger];
const middlewares = [thunk];

const store = createStore( RootReducer, applyMiddleware(...middlewares));

export default store;



