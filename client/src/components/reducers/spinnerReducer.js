import * as types from '../actions/index';

export default function spinner(spinnerOn = false, action) {
	switch (action.type) {
		case types.SPINNER_ON:
			return true;
		case types.SPINNER_OFF:
			return false;
		default:
			return spinnerOn;
	}
}
