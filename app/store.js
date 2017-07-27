import { createStore, combineReducers } from 'redux';

import clublist from './reducers/clublist';

var store = createStore(clublist);

store.subscribe(() => {
  console.log(store.getState().lastAction);
});

export default store;