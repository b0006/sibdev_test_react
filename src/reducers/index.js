import { combineReducers } from 'redux';

import { authentication } from './auth';
import { swapi } from './swapi';
import { users } from './user';
import { dashboard } from './dashboard';
import { cats } from './cats';
import { punks } from './punks';

const rootReducer = combineReducers({
  authentication,
  swapi,
  users,
  dashboard,
  cats,
  punks
});

export default rootReducer;
