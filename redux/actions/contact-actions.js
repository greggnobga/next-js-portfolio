import { CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FAILURE } from '../constants/contact-constants';

export const messageContact = (params) => async (dispatch, getState) => {
  console.log(params);
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

    // const data = await reponse.json();

    // console.log(data);

    /** Dispatch success. */
    dispatch({ type: CONTACT_SUCCESS, payload: { success: true, message: 'Message sent!' } });
  } catch (error) {
    /** Dispatch failure. */
    dispatch({
      type: CONTACT_FAILURE,
      payload: 'Unable to send your message.',
    });
  }
};
