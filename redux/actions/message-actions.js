import {
    MESSAGE_SEND_REQUEST,
    MESSAGE_SEND_SUCCESS,
    MESSAGE_SEND_FAILURE,
    MESSAGE_LIST_REQUEST,
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_FAILURE,
    MESSAGE_VIEW_REQUEST,
    MESSAGE_VIEW_SUCCESS,
    MESSAGE_VIEW_FAILURE,
} from '../constants/message-constants';

export const sendMessage = (params) => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: MESSAGE_SEND_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        /** Wait for the response. */
        const data = await response.json();

        /** Dispatch success. */
        dispatch({
            type: MESSAGE_SEND_SUCCESS,
            payload: { status: data.status, title: data.title, message: data.message },
        });
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: MESSAGE_SEND_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const listMessage = () => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: MESSAGE_LIST_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/message', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        /** Wait for the response. */
        const data = await response.json();

        /** Dispatch success. */
        dispatch({ type: MESSAGE_LIST_SUCCESS, payload: { messages: data } });

        /** Save messages to local storage. */
        localStorage.setItem('messageList', JSON.stringify(data));
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: MESSAGE_LIST_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const viewMessage = (id) => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: MESSAGE_VIEW_REQUEST });

        /** Make api request. */
        const response = await fetch(`/api/message/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        /** Wait for the response. */
        const data = await response.json();

        /** Dispatch success. */
        dispatch({ type: MESSAGE_VIEW_SUCCESS, payload: { message: data } });

        /** Clear message list. */
        dispatch({ type: MESSAGE_LIST_REQUEST });

        /** Remove state in local storage. */
        localStorage.removeItem('messageList');
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: MESSAGE_VIEW_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const resetMessage = (params) => async (dispatch, getState) => {
    /** Dispatch request. */
    dispatch({ type: MESSAGE_SEND_REQUEST });
};
