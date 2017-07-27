import { createStore, combineReducers } from 'redux';

import searchReducer from './reducers/clublist';

var store = createStore(searchReducer);

console.log(store.getState());

export default store;