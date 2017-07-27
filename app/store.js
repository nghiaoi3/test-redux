import { createStore, combineReducers } from 'redux';

import clublist from './reducers/clublist';

var store = createStore(clublist);


export default store;