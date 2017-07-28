import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import clublist from './reducers/clublist';
import mySaga from './sagas'


// create the saga middleware
var sagaMiddleware = createSagaMiddleware()

var store = createStore(clublist,applyMiddleware(sagaMiddleware));

//track changes
store.subscribe(() => {
  console.log(store.getState());
});

// then run the saga
sagaMiddleware.run(mySaga)

export default store;






