import { PunksService } from '../services';
import { punksConstants } from '../constants';
const punksStoreService = new PunksService();

function getBeers() {
  return dispatch => {
    dispatch(request());

    punksStoreService.getBeers()
      .then(
        beers => {
          dispatch(success(beers));
        },
        err => {
          dispatch(failure(err));
        }
      );
  };

  function request() { return { type: punksConstants.PUNKS_GET_BEERS_REQUEST } }
  function success(beers) { return { type: punksConstants.PUNKS_GET_BEERS_SUCCESS, beers } }
  function failure(error) { return { type: punksConstants.PUNKS_GET_BEERS_FAILURE, error } }
}

export {
  getBeers
};
