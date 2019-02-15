import { punksConstants } from '../constants';

const initialState = {
  beers: [],
  punkLoading: false
};

const punks = (state = initialState, action) => {
  switch (action.type) {
    case punksConstants.PUNKS_GET_BEERS_REQUEST:
      return {
        beers: state.beers,
        punkLoading: false
      };
    case punksConstants.PUNKS_GET_BEERS_SUCCESS:
      return {
        beers: action.beers,
        punkLoading: true
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
