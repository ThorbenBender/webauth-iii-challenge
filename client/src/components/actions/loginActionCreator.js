import * as types from './index';
import axios from 'axios';
import { spinnerOff, spinnerOn } from './spinnerActionCreator';

export const login = (user) => (dispatch) => {
	dispatch(spinnerOn);
	axios
		.post('http://localhost:8000/api/login', user)
		.then((res) => {
			dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
			window.history.replaceState('/home', '');
		})
		.then(dispatch(spinnerOff));
};
