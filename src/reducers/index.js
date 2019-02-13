import { combineReducers } from 'redux';

import { authentication } from './auth';
import { swapi } from './swapi';
import { users } from './user';
import { dashboard } from './dashboard';

const rootReducer = combineReducers({
  authentication,
  swapi,
  users,
  dashboard
});

export default rootReducer;
