'use client';

/** Vendor. */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

/** Reducer. */
import { userAuth } from './reducers/user-reducers';
import { messageList, messageSend } from './reducers/message-reducers';
import { projectList } from './reducers/project-reducers';

/** Combine reducer. */
const reducer = combineReducers({
    userAuth: userAuth,
    messageList: messageList,
    messageSend: messageSend,
    projectList: projectList,
});

/** Define variables. */
let userAuthFromStorage;
let messageListFromStorage;

/** Only run when window is set. */
if (typeof window !== 'undefined') {
    /** Get state from local storage. */
    userAuthFromStorage = localStorage.getItem('userAuth') ? JSON.parse(localStorage.getItem('userAuth')) : '';
    messageListFromStorage = localStorage.getItem('messageList') ? JSON.parse(localStorage.getItem('messageList')) : '';
}

/** Define initial state. */
const initialState = {
    userAuth: userAuthFromStorage,
    messageList: messageListFromStorage,
};

/** Middleware. */
const middleware = [thunk];

/** Store. */
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

/** Export. */
export default store;
