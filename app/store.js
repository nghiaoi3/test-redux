import { createStore, combineReducers } from 'redux';

import clublist from './reducers/clublist';

var store = createStore(clublist);

console.log(store.getState());

export default store;