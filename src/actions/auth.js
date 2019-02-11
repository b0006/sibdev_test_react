import { authService } from '../services';

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    authService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(user) { return { type: 'USERS_LOGIN_REQUEST', user } }
  function success(user) { return { type: 'USERS_LOGIN_SUCCESS', user } }
  function failure(error) { return { type: 'USERS_LOGIN_FAILURE', error } }
}

function logout() {
  authService.logout();
  return { type: 'USERS_LOGOUT' };
}

export {
  login,
  logout
};
