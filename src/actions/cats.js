import { CatsService } from '../services';
import { catsConstants } from '../constants';
const catsStoreService = new CatsService();

function getFacts() {
  return dispatch => {
    dispatch(request());

    catsStoreService.getFacts()
      .then(
        catFacts => {
          dispatch(success(catFacts));
        },
        err => {
          dispatch(failure(err));
        }
      );
  };

  function request() { return { type: catsConstants.CATS_GET_FACTS_REQUEST } }
  function success(catFacts) { return { type: catsConstants.CATS_GET_FACTS_SUCCESS, catFacts } }
  function failure(error) { return { type: catsConstants.CATS_GET_FACTS_FAILURE, error } }
}

export {
  getFacts
};
