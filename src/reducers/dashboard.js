import { dashboardConstants } from '../constants';

const initialState = {
  serviceList: [],
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case dashboardConstants.DASH_GET_ALL_REQUEST:
      return state;
    case dashboardConstants.DASH_GET_ALL_SUCCESS:
      return {
        serviceList: action.serviceList
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
