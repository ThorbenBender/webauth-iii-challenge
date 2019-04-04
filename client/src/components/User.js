import React from 'react';

export default function User({ user }) {
	return (
		<div>
			<p>{user.username}</p>
			<p>{user.department}</p>
		</div>
	);
}
