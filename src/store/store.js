import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { cartReducer } from '../reducer/cartReducer';
import { uiReducer } from '../reducer/uiReducer';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const reducer = combineReducers({
  cart: cartReducer,
  ui: uiReducer
});

export const store = createStore(reducer, enhancer)