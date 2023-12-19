import { TOAST_MESSAGE, TOAST_RESET } from '../constants/toast-constants';

/** Toast reducer. */
export function toastMessage(state = {}, action) {
    switch (action.type) {
        case TOAST_RESET:
            return {};
        case TOAST_MESSAGE:
            return { ...action.payload };

        default:
            return state;
    }
}
