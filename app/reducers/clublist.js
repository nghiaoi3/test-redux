import { SEARCH} from "../components/action";




export default  (state = {  data: []}, action) => {
switch (action.type) {
  
      
    case SEARCH:
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
        data: action.payload.data, //res.json(businesses)
        loading: false,
        error: false
      };
    default:
      return state;

  }
}



