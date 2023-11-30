import { CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FAILURE } from '../constants/contact-constants';

export const messageContact = (params) => async (dispatch, getState) => {
  /** Initiate try catch block. */
  try {
    /** Dispatch request. */
    dispatch({ type: CONTACT_REQUEST });

    /** Make api request. */
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    /** Wait for the response. */
    const data = await response.json();

    /** Dispatch success. */
    dispatch({ type: CONTACT_SUCCESS, payload: { status: data.status, message: data.message } });
  } catch (error) {
    /** Dispatch failure. */
    dispatch({
      type: CONTACT_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const messageReset = (params) => async (dispatch, getState) => {
  /** Dispatch request. */
  dispatch({ type: CONTACT_REQUEST });
};
