import { createStore, combineReducers, applyMiddleware } from 'redux';
/*import createSagaMiddleware from 'redux-saga'*/
import clublist from './reducers/clublist';


var store = createStore(clublist);

//track changes
store.subscribe(() => {
  console.log(store.getState());
});

export default store;


/*import mySaga from './sagas'*/

/* create the saga middleware
var sagaMiddleware = createSagaMiddleware()*/
/* then run the saga
sagaMiddleware.run(mySaga)*/







