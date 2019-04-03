const express = require('express');
const knex = require('knex');
const restricted = require('../restricted/restricted');

const knexConfig = require('../../../knexfile').development;

const db = knex(knexConfig);

const routes = express.Router();

routes.get('', restricted, async (req, res) => {
	try {
		users = await db('User');
		if (users) {
			res.status(200).json(users);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error getting the data!!' });
	}
});

module.exports = routes;
