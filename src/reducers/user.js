import { userConstants } from '../constants';

const initialState = {
  userList: []
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_ADD:
      return {
        userList: action.userList
      };
    case userConstants.USER_DELETE:
      return {
        userList: action.userList
      };
    case userConstants.USER_UPDATE:
      return {
        userList: action.userList
      };
    case userConstants.USER_GET_ALL:
      return {
        userList: action.userList
      };
    default:
      return state
  }
};

export {
  users
};
