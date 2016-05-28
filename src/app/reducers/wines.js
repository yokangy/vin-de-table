import {
  FETCH_WINES
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WINES:
      return [...state, ...action.payload]
  }
  
  return state;
}