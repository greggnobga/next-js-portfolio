/** Constant. */
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../constants/user-constants';

import { TOAST_MESSAGE } from '../constants/toast-constants';

export const userLogin = (params) => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: USER_LOGIN_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        /** Wait for the response. */
        const data = await response.json();

        if (data && data.status <= 300) {
            /** Dispatch success. */
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: { email: data.email, name: data.name, admin: data.admin, message: data.message, status: data.status, logged: data.logged },
            });

            /** Dispatch toast. */
            dispatch({
                type: TOAST_MESSAGE,
                payload: { message: data.message, status: data.status },
            });

            /** Save access token to local storage. */
            localStorage.setItem('userAuth', JSON.stringify(data));
        } else {
            /** Dispatch toast. */
            dispatch({
                type: TOAST_MESSAGE,
                payload: { message: data.message, status: data.status },
            });
        }
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const userLogout = (params) => async (dispatch, getState) => {
    /** Make api request. */
    const response = await fetch('/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });

    /** Wait for the response. */
    const data = await response.json();

    /** Remove state in local storage. */
    localStorage.removeItem('userAuth');
    localStorage.removeItem('messageList');
    localStorage.removeItem('projectList');
    localStorage.removeItem('projectFeatured');

    /** Dispatch request. */
    dispatch({ type: USER_LOGIN_REQUEST });

    /** Dispatch message reset. */
    dispatch({ type: TOAST_MESSAGE, payload: { message: data.message, status: data.status } });
};
