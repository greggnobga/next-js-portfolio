import { TOAST_RESET } from '../constants/toast-constants';

export const resetToast = (params) => async (dispatch, getState) => {
    /** Dispatch reset. */
    dispatch({
        type: TOAST_RESET,
        payload: {},
    });
};
