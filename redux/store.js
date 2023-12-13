'use client';

/** Vendor. */
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

/** Reducer. */
import { userAuth } from './reducers/user-reducers';
import { messageSend, messageList, messageView } from './reducers/message-reducers';
import { projectList } from './reducers/project-reducers';

/** Combine reducer. */
const reducer = combineReducers({
    userAuth: userAuth,
    messageSend: messageSend,
    messageList: messageList,
    messageView: messageView,
    projectList: projectList,
});

/** Define variables. */
let userAuthFromStorage;
let messageListFromStorage;
let projectListFromStorage;

/** Only run when window is set. */
if (typeof window !== 'undefined') {
    /** Get state from local storage. */
    userAuthFromStorage = localStorage.getItem('userAuth') ? JSON.parse(localStorage.getItem('userAuth')) : '';
    projectListFromStorage = localStorage.getItem('projectList') ? JSON.parse(localStorage.getItem('projectList')) : '';
}

/** Define initial state. */
const initialState = {
    userAuth: userAuthFromStorage,
    messageList: messageListFromStorage,
};

/** Middleware. */
const middleware = [thunk];

/** Store. */
const store = createStore(reducer, initialState, applyMiddleware(...middleware));

/** Export. */
export default store;
