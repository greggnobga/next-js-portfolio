import { USER_AUTH_REQUEST, USER_AUTH_SUCCESS, USER_AUTH_FAILURE } from '../constants/user-constants';

export const authUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_AUTH_REQUEST, payload: { loading: true, success: 'Test request payload.' } });

    /** Dispatch action to set inital state. */
    dispatch({ type: USER_AUTH_SUCCESS, payload: { loading: false, success: 'Test success payload.' } });

    throw Error('test error.');
  } catch (error) {
    /** Dispatch action if error occurred. */
    dispatch({
      type: USER_AUTH_FAILURE,
      payload: { loading: false, error: 'Test error payload.' },
    });
  }
};
