import { USER_AUTH_REQUEST, USER_AUTH_SUCCESS, USER_AUTH_FAILURE } from '../constants/user-constants';

/** Auth reducer. */
export function authUser(state = {}, action) {
  switch (action.type) {
    case USER_AUTH_REQUEST:
      return { loading: true };
    case USER_AUTH_SUCCESS:
      return { loading: false, ...action.payload };
    case USER_AUTH_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
