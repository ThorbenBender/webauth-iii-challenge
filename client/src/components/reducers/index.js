import { combineReducers } from 'redux';
import spinner from './spinnerReducer';
import fetchUser from './fetchUserReducer';
import register from './registerReducer';

const rootReducer = combineReducers({
	spinner,
	fetchUser,
	register
});

export default rootReducer;
