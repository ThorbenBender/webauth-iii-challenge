import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, token, users, ...rest }) => {
	return (
		<Route
			users={users}
			{...rest}
			render={(props) => (token ? <Component users={users} {...props} /> : <Redirect to='/login' />)}
		/>
	);
};

export default PrivateRoute;
