import {
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAILURE,
    PROJECT_FEATURED_REQUEST,
    PROJECT_FEATURED_SUCCESS,
    PROJECT_FEATURED_FAILURE,
} from '../constants/project-constants';

/** Project list. */
export const listProject = () => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: PROJECT_LIST_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/project', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        /** Wait for the response. */
        const data = await response.json();

        /** Dispatch success. */
        dispatch({ type: PROJECT_LIST_SUCCESS, payload: { projects: data } });

        /** Save messages to local storage. */
        localStorage.setItem('projectList', JSON.stringify(data));
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: PROJECT_LIST_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

/** Project featured. */
export const featuredProject = () => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: PROJECT_FEATURED_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/project/featured', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        /** Wait for the response. */
        const data = await response.json();

        /** Dispatch success. */
        dispatch({ type: PROJECT_FEATURED_SUCCESS, payload: { featured: data } });

        /** Save messages to local storage. */
        localStorage.setItem('projectFeatured', JSON.stringify(data));
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: PROJECT_FEATURED_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
