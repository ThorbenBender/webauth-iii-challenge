import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './components/actions/loginActionCreator';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Users from './components/Users';
import { fetchUser } from './components/actions/userActionCreator';
import { register } from './components/actions/registerActionCreator';
import Register from './components/Register';

class App extends Component {
	state = {
		token: localStorage.getItem('token')
	};
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
				<Route exact path='/login' render={() => <Login login={this.props.login} />} />
				<Route exact path='/register' render={() => <Register register={this.props.register} />} />
				<PrivateRoute exact path='/home' component={Users} token={this.state.token} users={this.props.users} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		spinner: state.spinnerOn,
		users: state.fetchUser
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			login,
			fetchUser,
			register
		},
		dispatch
	);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
