import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
	state = {
		password: '',
		username: ''
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div>
				<input type='text' name='username' onChange={this.handleChange} />
				<input type='password' name='password' onChange={this.handleChange} />
				<button onClick={() => this.props.login({ password: this.state.password, username: this.state.username })}>
					Login
				</button>
				<Link to='/register'>Register</Link>
			</div>
		);
	}
}
