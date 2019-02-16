import { authConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        loggedIn: true,
        user: action.user
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case authConstants.LOGIN_FAILURE:
      return state;
    case authConstants.LOGOUT:
      return {
        loggedIn: false,
        user: {}
      };
    default:
      return state
  }
};
