import axios from "axios";




export function fetchSites() {
  return async dispatch => {
    dispatch({
      type: 'FETCH_SITES_REQUEST'
    });

    try {
      var response = await axios.get('/api/yelp');
      var data = response.data;
      dispatch({
        type: 'SEARCH',
        data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_SITES_ERROR',
        error
      });
    }
  };
}
