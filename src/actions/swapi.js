import { SwapiService } from '../services';
import { swapiConstants } from '../constants';
const swapiStoreService = new SwapiService();

function getPersons() {
  return dispatch => {
    dispatch(request());

    swapiStoreService.getPersons()
      .then(
        swPeople => {
          dispatch(success(swPeople));
        },
        err => {
          dispatch(failure(err));
        }
      );
  };

  function request() { return { type: swapiConstants.SW_PEOPLE_REQUEST } }
  function success(swPeople) { return { type: swapiConstants.SW_PEOPLE_SUCCESS, swPeople } }
  function failure(error) { return { type: swapiConstants.SW_PEOPLE_FAILURE, error } }
}

export {
  getPersons
};
