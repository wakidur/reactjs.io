import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import RootReducer from './root-reducer';

// const middlewares = [logger];
const middlewares = [thunk];

/**
 * Befor adding redux-persist
 * const store = createStore( RootReducer, applyMiddleware(...middlewares));
 * export default store;
 */

/**
 * redux-persist library use for local storag or session storage
 */
export const store = createStore(RootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
