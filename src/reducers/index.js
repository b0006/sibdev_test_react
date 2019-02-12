import { combineReducers } from 'redux';

import { authentication } from './auth';
import { swapi } from './swapi';
import { users } from './user';

const rootReducer = combineReducers({
  authentication,
  swapi,
  users
});

export default rootReducer;
