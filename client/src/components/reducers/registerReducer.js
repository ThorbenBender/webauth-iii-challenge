import * as types from '../actions/index';

export default function register(user = [], action) {
	switch (action.type) {
		case types.ADD_USER_SUCCESS:
			return action.payload;
		case types.ADD_USER_ERROR:
			return action.payload;
		default:
			return user;
	}
}
