import { PROJECT_REQUEST, PROJECT_SUCCESS, PROJECT_FAILURE } from '../constants/project-constants';

/** Login user reducer. */
export function projectList(state = {}, action) {
  switch (action.type) {
    case PROJECT_REQUEST:
      return { logged: false };
    case PROJECT_SUCCESS:
      return { ...action.payload };
    case PROJECT_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
}
