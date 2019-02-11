// const initialState = {
//   swPeople: [],
//   isLoggedIn: false
// };
//
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SW_PEOPLE_LOADED': {
//
//     }
//     case 'AUTH_LOGIN': {
//       return state.isLoggedIn;
//     }
//     default:
//       return state;
//   }
// };
//
// export default reducer;

import { combineReducers } from 'redux';

import { authentication } from './auth';
import { swapi } from './swapi';

const rootReducer = combineReducers({
  authentication,
  swapi
});

export default rootReducer;
