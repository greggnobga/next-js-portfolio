import {
    MESSAGE_LIST_REQUEST,
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_FAILURE,
    MESSAGE_SEND_REQUEST,
    MESSAGE_SEND_SUCCESS,
    MESSAGE_SEND_FAILURE,
} from '../constants/message-constants';

/** List message reducer. */
export function messageList(state = {}, action) {
    switch (action.type) {
        case MESSAGE_LIST_REQUEST:
            return {};
        case MESSAGE_LIST_SUCCESS:
            return { ...action.payload };
        case MESSAGE_LIST_FAILURE:
            return { error: action.payload };
        default:
            return state;
    }
}

/** Send message reducer. */
export function messageSend(state = {}, action) {
    switch (action.type) {
        case MESSAGE_SEND_REQUEST:
            return {};
        case MESSAGE_SEND_SUCCESS:
            return { ...action.payload };
        case MESSAGE_SEND_FAILURE:
            return { error: action.payload };
        default:
            return state;
    }
}
