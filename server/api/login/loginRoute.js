const knex = require('knex');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const knexConfig = require('../../../knexfile').development;

const db = knex(knexConfig);

function makeTokenFromUser(user) {
	const payload = {
		subject: user.id,
		username: user.username,
		roles: [ 'student' ]
	};
	const options = {
		expiresIn: '1h'
	};
	const token = jwt.sign(payload, 'secret', options);
	return token;
}

const routes = express.Router();

routes.use(express.json());

routes.post('', async (req, res) => {
	try {
		const credentials = req.body;
		const user = await db('User').where({ username: credentials.username }).first();
		if (credentials && bcrypt.compareSync(credentials.password, user.password)) {
			const token = makeTokenFromUser(user);
			req.session.user = user;
			res.status(200).json({
				message: 'You are logged in',
				token: token
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error at logging in' });
	}
});

module.exports = routes;
