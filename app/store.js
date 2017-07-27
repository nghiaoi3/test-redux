import { createStore, combineReducers } from 'redux';

import searchReducer from './reducers/clublist';

var store = createStore(searchReducer);


export default store;