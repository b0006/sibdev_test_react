import { DashBoadService } from '../services';
import { dashboardConstants } from '../constants';
const dashboardStoreService = new DashBoadService();

function getServiceData(login) {
  return dispatch => {
    dispatch(request(login));

    const result = dashboardStoreService.getServiceData(login);
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
      user: serviceData.user
    }
  }
  function failure(error) { return { type: dashboardConstants.DASH_GET_ALL_FAILURE, error } }
}

export {
  getServiceData
};
