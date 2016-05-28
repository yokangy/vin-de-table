import { combineReducers } from 'redux';
import WineReducer from './wines';

const rootReducer = combineReducers({
	wines: WineReducer
})

export default rootReducer;