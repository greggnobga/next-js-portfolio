'use client';

/** Vendor. */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

/** Reducer. */
import { userAuth } from './reducers/user-reducers';
import { contactMessage } from './reducers/contact-reducers';

/** Combine reducer. */
const reducer = combineReducers({
  userAuth: userAuth,
  contactMessage: contactMessage,
});

/** Define variables. */
let userAuthFromStorage;

/** Only run when window is set. */
if (typeof window !== 'undefined') {
  /** Get token from local storage. */
  userAuthFromStorage = localStorage.getItem('userAuth') ? JSON.parse(localStorage.getItem('userAuth')) : '';
}

/** Define initial state. */
const initialState = {
  userAuth: userAuthFromStorage,
};

/** Middleware. */
const middleware = [thunk];

/** Store. */
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

/** Export. */
export default store;
