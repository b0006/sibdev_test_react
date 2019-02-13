import { userConstants } from '../constants';
import { findLocalItems } from '../utils/localStorage';

let userList = findLocalItems(/(user_)+\d+/gm);
const initialState = userList ? { userList } : { userList: [] };

const users = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_ADD_REQUEST:
      return state;
    case userConstants.USER_ADD_SUCCESS:
      return {
        userList: [
          ...state.userList,
          action.user
        ]
      };
    case userConstants.USER_ADD_FAILURE:
      return state;
    default:
      return state
  }
};

export {
  users
};
