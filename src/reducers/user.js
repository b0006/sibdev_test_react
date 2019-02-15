import { userConstants } from '../constants';
import { findLocalItems } from '../utils/localStorage';

let userList = findLocalItems(/(user_)[\d\w]+/gm);
const initialState = userList
  ? { userList, hasError: false, errorMsg: null, activeUser: null }
  : { userList: [], hasError: false, errorMsg: null, activeUser: null };

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

    case userConstants.USER_SET_ACTIVE_FOR_UPDATE_REQUEST:
      return state;
    case userConstants.USER_SET_ACTIVE_FOR_UPDATE_SUCCESS:
      return {
        ...state,
        activeUser: action.user
      };
    case userConstants.USER_SET_ACTIVE_FOR_UPDATE_FAILURE:
      return {
        ...state,
        hasError: true,
        errorMsg: action.error
      };

    case userConstants.USER_DELETE_ACTIVE_FOR_UPDATE_REQUEST:
      return state;
    case userConstants.USER_DELETE_ACTIVE_FOR_UPDATE_SUCCESS:
      return {
        ...state,
        activeUser: null
      };
    case userConstants.USER_DELETE_ACTIVE_FOR_UPDATE_FAILURE:
      return {
        ...state,
        hasError: true,
        errorMsg: action.error
      };

    case userConstants.USER_UPDATE_REQUEST:
      return state;
    case userConstants.USER_UPDATE_SUCCESS:
      return {
        ...state,
        userList: updateUser(state.userList, action.user)
      };
    case userConstants.USER_UPDATE_FAILURE:
      return {
        ...state,
        hasError: true,
        errorMsg: action.error
      };
    default:
      return state
  }
};

function updateUser(userList, user) {
  const userIndex = userList.findIndex(({login}) => user.login === login);
  return [
    ...userList.slice(0, userIndex),
    user,
    ...userList.slice(userIndex + 1)
  ]

}

function removeUser(userList, removeLogin) {
  return userList.filter(item => item.login !== removeLogin);
}

export {
  users
};
