import { DashBoadService } from '../services';
import { dashboardConstants } from '../constants';
const dashboardStoreService = new DashBoadService();

function getServiceList(login) {
  return dispatch => {
    dispatch(request(login));

    const result = dashboardStoreService.getServiceList(login);
    if(result.success) {
      dispatch(success(result));
    } else {
      dispatch(failure(result.message));
    }
  };

  function request(login) { return { type: dashboardConstants.DASH_GET_ALL_REQUEST, login } }
  function success(serviceData) {
    return { type: dashboardConstants.DASH_GET_ALL_SUCCESS,
      serviceList: serviceData.serviceList,
      user: {
        fullname: serviceData.user.fullname,
        login: serviceData.user.login
      }
    }
  }
  function failure(error) { return { type: dashboardConstants.DASH_GET_ALL_FAILURE, error } }
}

export {
  getServiceList
};
