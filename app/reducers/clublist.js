import { SEARCH} from "../components/action";


var defaultState = {  data: []};


export default  (state = defaultState, action) => {
switch (action.type) {
    case SEARCH:
console.log('ac '+action.payload.data)
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



