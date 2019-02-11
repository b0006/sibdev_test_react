const initialState = {
  swPeople: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SW_PEOPLE_LOADED': {

    }
    default:
      return state;
  }
};

export default reducer;
