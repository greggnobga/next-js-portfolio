/** Constant. */
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_MESSAGE, USER_LOGIN_LOGOUT } from '../constants/user-constants';

/** Vendor. */
import { redirect } from 'next/navigation';

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

    /** Dispatch success. */
    dispatch({ type: USER_LOGIN_SUCCESS, payload: { token: data.token, status: data.status, message: data.message } });

    /** Save access token to local storage. */
    localStorage.setItem('userAuth', JSON.stringify(data));

    /** Redirect to dashboard. */
    if (data) {
      redirect('/dashboard');
    }
  } catch (error) {
    /** Dispatch failure. */
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const userReset = (params) => async (dispatch, getState) => {
  /** Get user auth state. */
  const { userAuth } = getState();

  /** Dispatch message reset. */
  dispatch({ type: USER_LOGIN_MESSAGE, payload: { ...userAuth, message: '' } });
};

export const userLogout = (params) => async (dispatch, getState) => {
  /** Remove access token to local storage. */
  localStorage.removeItem('userAuth');

  /** Dispatch message reset. */
  dispatch({ type: USER_LOGIN_LOGOUT });
};
