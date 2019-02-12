import { combineReducers } from 'redux';

import { authentication } from './auth';
import { swapi } from './swapi';

const rootReducer = combineReducers({
  authentication,
  swapi
});

export default rootReducer;
