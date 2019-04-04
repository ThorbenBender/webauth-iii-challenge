import React from 'react';
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
	state = {
		username: '',
		department: '',
		password: ''
	};
	changeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	render() {
		return (
			<div>
				<input type='text' name='username' />
				<input type='department' name='department' />
				<input type='password' name='department' />
				<button
					onClick={() =>
						this.props.register({
							username: this.state.username,
							department: this.state.department,
							password: this.state.password
						})}>
					Register
				</button>
				<Link to='/login'>Login</Link>
			</div>
		);
	}
}
