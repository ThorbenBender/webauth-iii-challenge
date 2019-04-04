import axios from './axios/axios';
import * as types from './index';
import { spinnerOff, spinnerOn } from './spinnerActionCreator';

export const fetchUser = () => (dispatch) => {
	dispatch(spinnerOn);
	axios()
		.get('http://localhost:8000/api/users')
		.then((res) => {
			dispatch({ type: types.FETCHING_USER_SUCCESSFULL, payload: res.data });
		})
		.then(dispatch(spinnerOff))
		.catch((err) => {
			dispatch({ type: types.FETCHING_USER_ERROR, payload: err });
		});
};
