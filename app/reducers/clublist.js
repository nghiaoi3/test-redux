/*import {combineReducers} from 'redux';


function loading(state = {  loading: false}, action) {
  switch (action.type) {
    case 'FETCH_SITES_REQUEST':
      return true;
    case 'FETCH_SITES_ERROR':
      return false;
    default:
      return state;
  }
}*/



export default  (state = {  data: []}, action)=>  {
switch (action.type) {
  
      case 'SEARCH':
      if (action.error) {
        return {
          ...state,
          data: [],
          loading: false,
          error: true
        };
      }
          return {
        ...state,
        data: action.payload.data, 
        loading: false,
        error: false
      };
      
      
    default:
      return state;

  }
}

/*
export default combineReducers({
  list,
  loading
});
*/