'use client';

/** Vendor. */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

/** Reducer. */
import { authUser } from './reducers/user-reducers';
import { contactMessage } from './reducers/contact-reducers';

/** Combine reducer. */
const reducer = combineReducers({
  userAuth: authUser,
  contactMessage: contactMessage,
});

/** Initial state. */
//const userAuthFromStorage = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

const initialState = {
  userAuth: { loading: false, success: false, error: null },
  contactMessage: { loading: false, message: null, error: null },
};

/** Middleware. */
const middleware = [thunk];

/** Store. */
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

/** Export. */
export default store;
