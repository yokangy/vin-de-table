import {
  FETCH_WINES
} from './types';

export function fetchWines() {
  return {
    type: FETCH_WINES,
    payload: [
    { 'vintage': 2012, 'winery': 'Duckhorn', 'name': '', 'varietal': 'Sauvignon Blanc', 'rating': 5 },
    { 'vintage': 2012, 'winery': 'Pine Ridge', 'name': '', 'varietal': 'Cabernet Sauvignon', 'rating': 5 }
    ]
  }
}