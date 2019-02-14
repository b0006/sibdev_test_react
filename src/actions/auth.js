import { AuthService } from '../services';
import { authConstants } from '../constants';

function signIn(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    AuthService.signIn(username, password)
      .then(
        user => {
          dispatch(success(user));
        },
        error => {
          console.log(error)
          dispatch(failure(error));
        }
      );
  };

  function request(user) { return { type: authConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: authConstants.LOGIN_SUCCESS, user: user } }
  function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {
  AuthService.logout();
  return { type: authConstants.LOGOUT };
}

export {
  signIn,
  logout
};
