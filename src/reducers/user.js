import { userConstants } from '../constants';
import { findLocalItems } from '../utils/localStorage';

const initialOtherState = {
  hasError: false,
  errorMsg: null,
  activeUser: null
};

let userList = findLocalItems(/(user_)[\d\w]+/gm);
const initialState = userList
  ? { userList, initialOtherState }
  : { userList: [], initialOtherState };

const users = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_ADD_REQUEST:
      return state;
    case userConstants.USER_ADD_SUCCESS:
      return {
        ...state,
        userList: [
          ...state.userList,
          action.user
        ]
      };
    case userConstants.USER_ADD_FAILURE:
      return {
        ...state,
        hasError: true,
        errorMsg: action.error
      };

    case userConstants.USER_DELETE_REQUEST:
      return state;
    case userConstants.USER_DELETE_SUCCESS:
      return {
        ...state,
        userList: removeUser(state.userList, action.login)
      };
    case userConstants.USER_DELETE_FAILURE:
      return {
        ...state,
        hasError: true,
        errorMsg: action.error
      };

    case userConstants.USER_REMOVE_ALL_REQUEST:
      return state;
    case userConstants.USER_REMOVE_ALL_SUCCESS:
      return {
        ...state,
        userList: [],
      };
    case userConstants.USER_REMOVE_ALL_FAILURE:
      return {
        ...state,
        hasError: true,
        errorMsg: action.error
      };
    default:
      return state
  }
};

function addUser(userList, newUser) {
  return [

  ]

  /**
   * ...state.arr.slice(0, action.pos),
   action.newItem,
   ...state.arr.slice(action.pos),
   *
   */
}

function removeUser(userList, removeLogin) {
  return userList.filter(item => item.login !== removeLogin);
}

export {
  users
};
