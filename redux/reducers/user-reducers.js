import { USER_AUTH_REQUEST, USER_AUTH_SUCCESS, USER_AUTH_FAILURE } from '../constants/user-constants';

/** Auth reducer. */
export function authUser(state = {}, action) {
  switch (action.type) {
    case USER_AUTH_REQUEST:
      return { ...action.payload };
    case USER_AUTH_SUCCESS:
      return { ...action.payload };
    case USER_AUTH_FAILURE:
      return { ...action.payload };
    default:
      return state;
  }
}
