import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_MESSAGE, USER_LOGIN_LOGOUT } from '../constants/user-constants';

/** Login user reducer. */
export function userAuth(state = {}, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { logged: false };
    case USER_LOGIN_SUCCESS:
      return { ...action.payload };
    case USER_LOGIN_FAILURE:
      return { error: action.payload };
    case USER_LOGIN_MESSAGE:
      return { ...action.payload };
    case USER_LOGIN_LOGOUT:
      return { ...action.payload };
    default:
      return state;
  }
}
