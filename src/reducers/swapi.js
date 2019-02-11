const initialState = {
  swPeople: [],
};

const swapi = (state = initialState, action) => {
  switch (action.type) {
    case 'SW_PEOPLE_LOADED': {
      return state.swPeople;
    }
    default:
      return state;
  }
};

export {
  swapi
};
