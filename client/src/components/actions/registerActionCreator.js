import spinner from '../reducers/spinnerReducer';
import * as types from './index';
import { spinnerOff, spinnerOn } from './spinnerActionCreator';
import axios from 'axios';

export const register = (user) => (dispatch) => {
	dispatch(spinnerOn);
	axios
		.post('http://localhost:8000/api/register', user)
		.then((res) => {
			dispatch({ type: types.ADD_USER_SUCCESS, payload: res.data });
		})
		.then(dispatch(spinnerOff))
		.catch((err) => {
			dispatch({ type: types.ADD_USER_ERROR, payload: err });
		});
};
