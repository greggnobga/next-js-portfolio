import { PROJECT_REQUEST, PROJECT_SUCCESS, PROJECT_FAILURE } from '../constants/project-constants';

export const listProject = (params) => async (dispatch, getState) => {
  /** Initiate try catch block. */
  try {
    /** Dispatch request. */
    dispatch({ type: PROJECT_REQUEST });

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
    dispatch({ type: PROJECT_SUCCESS, payload: { status: data.status, message: data.message } });
  } catch (error) {
    /** Dispatch failure. */
    dispatch({
      type: PROJECT_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
