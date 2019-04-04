const knex = require('knex');
const express = require('express');
const bcrypt = require('bcryptjs');

const knexConfig = require('../../../knexfile').development;

const db = knex(knexConfig);

const routes = express.Router();

routes.use(express.json());

routes.post('', async (req, res) => {
	try {
		const user = req.body;

		const hash = bcrypt.hashSync(user.password, 10);

		user.password = hash;

		newUser = await db('User').insert(user);
		if (newUser) {
			res.status(201).json(newUser);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error at registering' });
	}
});

module.exports = routes;
