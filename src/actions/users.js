import { UserService } from '../services';
import { userConstants } from '../constants';

function add(fullname, login, services) {
  return dispatch => {
    dispatch(request({ fullname, login, services }));

    const newUser = UserService.add(fullname, login, services);
    if(newUser.success) {
      dispatch(success({
        fullname: fullname,
        login: login,
        services: services
      }));
    } else {
      dispatch(failure(newUser.message));
    }
  };

  function request(user) { return { type: userConstants.USER_ADD_REQUEST, user } }
  function success(user) { return { type: userConstants.USER_ADD_SUCCESS, user } }
  function failure(error) { return { type: userConstants.USER_ADD_FAILURE, error } }
}

function remove(login) {
  return dispatch => {
    dispatch(request(login));

    const result = UserService.remove(login);
    if(result) {
      dispatch(success(login));
    } else {
      dispatch(failure('Error'));
    }
  };

  function request(login) { return { type: userConstants.USER_DELETE_REQUEST, login } }
  function success(login) { return { type: userConstants.USER_DELETE_SUCCESS, login } }
  function failure(error) { return { type: userConstants.USER_DELETE_FAILURE, error } }
}

function removeAll() {
  return dispatch => {
    dispatch(request());

    const result = UserService.removeAll();
    if(result) {
      dispatch(success());
    } else {
      dispatch(failure('Error'));
    }
  };

  function request() { return { type: userConstants.USER_REMOVE_ALL_REQUEST } }
  function success() { return { type: userConstants.USER_REMOVE_ALL_SUCCESS } }
  function failure(error) { return { type: userConstants.USER_REMOVE_ALL_FAILURE, error } }
}

export {
  add,
  remove,
  removeAll
};
