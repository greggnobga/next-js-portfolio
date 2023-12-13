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

/** View message reducer. */
export function messageView(state = {}, action) {
    switch (action.type) {
        case MESSAGE_VIEW_REQUEST:
            return {};
        case MESSAGE_VIEW_SUCCESS:
            return { ...action.payload };
        case MESSAGE_VIEW_FAILURE:
            return { error: action.payload };
        default:
            return state;
    }
}
