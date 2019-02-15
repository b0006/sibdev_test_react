import { punksConstants } from '../constants';

const initialState = {
  beers: []
};

const punks = (state = initialState, action) => {
  switch (action.type) {
    case punksConstants.PUNKS_GET_BEERS_REQUEST:
      return state;
    case punksConstants.PUNKS_GET_BEERS_SUCCESS:
      return {
        beers: action.beers
      };
    case punksConstants.PUNKS_GET_BEERS_FAILURE:
      return state;
    default:
      return state;
  }
};

export {
  punks
};
