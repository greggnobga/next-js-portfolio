'use client';

/** Vendor. */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

/** Reducer. */
import { authUser } from './reducers/user-reducers';

/** Combine reducer. */
const reducer = combineReducers({
  userAuth: authUser,
});

/** Initial state. */
//const userAuthFromStorage = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

const initialState = {
  userAuth: { loading: '', success: '', error: '' },
};

/** Middleware. */
const middleware = [thunk];

/** Store. */
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

/** Export. */
export default store;
