import { CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FAILURE } from '../constants/contact-constants';

/** Auth reducer. */
export function contactMessage(state = {}, action) {
  switch (action.type) {
    case CONTACT_REQUEST:
      return {};
    case CONTACT_SUCCESS:
      return { ...action.payload };
    case CONTACT_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
}
