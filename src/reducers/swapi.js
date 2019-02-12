import { swapiConstants } from '../constants';

const initialState = {
  swPeople: [],
};

const swapi = (state = initialState, action) => {
  switch (action.type) {
    case swapiConstants.SW_PEOPLE_REQUEST:
      return {
        swPeople: action.swPeople
      };
    case swapiConstants.SW_PEOPLE_SUCCESS:
      return {
        swPeople: action.swPeople
      };
    case swapiConstants.SW_PEOPLE_FAILURE:
      return {};
    default:
      return state;
  }
};

export {
  swapi
};
