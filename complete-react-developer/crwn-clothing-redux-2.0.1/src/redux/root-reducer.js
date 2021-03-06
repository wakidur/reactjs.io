import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/**
 * before adding redux-persist
 * export default combineReducers({
    user: userReducer,
    cart: cartReducer
    });
 * 
 */

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import infoReducer from './info-reducer/info.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  info: infoReducer,
});

export default persistReducer(persistConfig, rootReducer);
