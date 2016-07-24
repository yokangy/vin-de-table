import axios from 'axios';
import {
  FETCH_WINES
} from './types';

const ROOT_URL = 'http://localhost:8080';

export function fetchWines() {
  return(function(dispatch) {
    axios.get(`${ROOT_URL}/wines`)
      .then(response => {
        dispatch({
          type: FETCH_WINES,
          payload: response.data
        })
      })
  });
}