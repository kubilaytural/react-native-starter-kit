import { combineReducers } from 'redux';

import * as ducks from './ducks';

const appReducer = combineReducers(ducks);

// Clears all of the reducer's states when user logout
const rootReducer = (state, action) => {
  if (action.type === 'user/LOGOUT') {
    state = {};
  }

  return appReducer(state, action);
};

export default rootReducer;
