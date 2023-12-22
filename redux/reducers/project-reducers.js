import {
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAILURE,
    PROJECT_FEATURED_REQUEST,
    PROJECT_FEATURED_SUCCESS,
    PROJECT_FEATURED_FAILURE,
} from '../constants/project-constants';

/** Project list reducer. */
export function projectList(state = {}, action) {
    switch (action.type) {
        case PROJECT_LIST_REQUEST:
            return { loading: false };
        case PROJECT_LIST_SUCCESS:
            return { loading: true, ...action.payload };
        case PROJECT_LIST_FAILURE:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

/** Project featured reducer. */
export function projectFeatured(state = {}, action) {
    switch (action.type) {
        case PROJECT_FEATURED_REQUEST:
            return { loading: false };
        case PROJECT_FEATURED_SUCCESS:
            return { loading: true, ...action.payload };
        case PROJECT_FEATURED_FAILURE:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
