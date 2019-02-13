import { UserService } from '../services';
import { userConstants } from '../constants';

function add(fullname, login, services) {
  return dispatch => {
    dispatch(request({ fullname, login, services }));

    const newUser = UserService.add(fullname, login, services);
    if(newUser) {
      dispatch(success(newUser));
    } else {
      dispatch(failure('Error'));
    }
  };

  function request(user) { return { type: userConstants.USER_ADD_REQUEST, user } }
  function success(user) { return { type: userConstants.USER_ADD_SUCCESS, user } }
  function failure(error) { return { type: userConstants.USER_ADD_FAILURE, error } }
}

export {
  add
};
