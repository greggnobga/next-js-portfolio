import { PROJECT_LIST_REQUEST, PROJECT_LIST_SUCCESS, PROJECT_LIST_FAILURE } from '../constants/project-constants';

/** Login user reducer. */
export function projectList(state = {}, action) {
    switch (action.type) {
        case PROJECT_LIST_REQUEST:
            return { logged: false };
        case PROJECT_LIST_SUCCESS:
            return { ...action.payload };
        case PROJECT_LIST_FAILURE:
            return { error: action.payload };
        default:
            return state;
    }
}
