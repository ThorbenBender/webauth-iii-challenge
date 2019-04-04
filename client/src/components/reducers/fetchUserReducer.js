import * as types from '../actions/index';

export default function fetchUser(users = [], action) {
	switch (action.type) {
		case types.FETCHING_USER_SUCCESSFULL:
			return action.payload;
		case types.FETCHING_USER_ERROR:
			return action.payload;
		default:
			return users;
	}
}
