import * as types from './index';

export const spinnerOn = () => {
	return { type: types.SPINNER_ON };
};

export const spinnerOff = () => {
	return { type: types.SPINNER_OFF };
};
