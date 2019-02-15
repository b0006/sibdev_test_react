import { swapiConstants } from '../constants';

const initialState = {
  swPeople: [],
  swLoading: false
};

const swapi = (state = initialState, action) => {
  switch (action.type) {
    case swapiConstants.SW_PEOPLE_REQUEST:
      return {
        swPeople: state.swPeople,
        swLoading: false
      };
    case swapiConstants.SW_PEOPLE_SUCCESS:
      return {
        swPeople: action.swPeople,
        swLoading: true
      };
    case swapiConstants.SW_PEOPLE_FAILURE:
      return state;
    default:
      return state;
  }
};

export {
  swapi
};
