import { catsConstants } from '../constants';

const initialState = {
  catFacts: []
};

const cats = (state = initialState, action) => {
  switch (action.type) {
    case catsConstants.CATS_GET_FACTS_REQUEST:
      return state;
    case catsConstants.CATS_GET_FACTS_SUCCESS:
      return {
        catFacts: action.catFacts
      };
    case catsConstants.CATS_GET_FACTS_FAILURE:
      return state;
    default:
      return state;
  }
};

export {
  cats
};
