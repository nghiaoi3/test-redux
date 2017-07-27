import { SEARCH} from "../components/action";

var searchReducer = (state = {data: []}, action) => {
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
      
            console.log( 'action data '+action.payload.data)


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

export default searchReducer;

