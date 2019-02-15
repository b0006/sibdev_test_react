import { UserService } from '../services';
import { userConstants } from '../constants';

function add(fullname, login, services) {
  return dispatch => {
    dispatch(request({ fullname, login, services }));

    const newUser = UserService.add(fullname, login, services);
    if(newUser.success) {
      dispatch(success(newUser));
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

function update(fullname, login, services) {
  return dispatch => {
    dispatch(request({ fullname, login, services }));

    const newUser = UserService.update(fullname, login, services);
    if(newUser.success) {
      dispatch(success(newUser));
    } else {
      dispatch(failure(newUser.message));
    }
  };

  function request(user) { return { type: userConstants.USER_UPDATE_REQUEST, user } }
  function success(user) { return { type: userConstants.USER_UPDATE_SUCCESS, user } }
  function failure(error) { return { type: userConstants.USER_UPDATE_FAILURE, error } }
}

function setUserForUpdate(login) {
  return dispatch => {
    dispatch(request(login));

    const result = UserService.getUser(login);
    if(result.success) {
      dispatch(success(result.user));
    } else {
      dispatch(failure(result.message));
    }
  };

  function request(login) { return { type: userConstants.USER_SET_ACTIVE_FOR_UPDATE_REQUEST, login } }
  function success(user) { return { type: userConstants.USER_SET_ACTIVE_FOR_UPDATE_SUCCESS, user } }
  function failure(error) { return { type: userConstants.USER_SET_ACTIVE_FOR_UPDATE_FAILURE, error } }
}

function delUserForUpdate() {
  return dispatch => {
    dispatch(request());

    dispatch(success());
  };

  function request() { return { type: userConstants.USER_DELETE_ACTIVE_FOR_UPDATE_REQUEST } }
  function success() { return { type: userConstants.USER_DELETE_ACTIVE_FOR_UPDATE_SUCCESS } }
}

export {
  add,
  remove,
  removeAll,
  setUserForUpdate,
  update,
  delUserForUpdate
};
