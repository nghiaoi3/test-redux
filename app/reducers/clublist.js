import { SEARCH} from "../components/action";

var searchReducer = (state = {data: []}, action) => {
switch (action.type) {
    case SEARCH:
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

export default searchReducer;

