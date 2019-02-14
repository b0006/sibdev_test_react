import { dashboardConstants } from '../constants';

const initialState = {
  serviceList: [],
  activeUser: {}
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case dashboardConstants.DASH_GET_ALL_REQUEST:
      return state;
    case dashboardConstants.DASH_GET_ALL_SUCCESS:
      return {
        serviceList: action.serviceList,
        activeUser: action.user
      };
    case dashboardConstants.DASH_GET_ALL_FAILURE:
      return state;
    default:
      return state;
  }
};

export {
  dashboard
};
