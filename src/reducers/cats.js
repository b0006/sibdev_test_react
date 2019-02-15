import { catsConstants } from '../constants';

const initialState = {
  catFacts: [],
  catsLoading: false
};

const cats = (state = initialState, action) => {
  switch (action.type) {
    case catsConstants.CATS_GET_FACTS_REQUEST:
      return {
        catFacts: state.catFacts,
        catsLoading: false
      };
    case catsConstants.CATS_GET_FACTS_SUCCESS:
      return {
        catFacts: action.catFacts,
        catsLoading: true
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
