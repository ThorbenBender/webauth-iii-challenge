const knex = require('knex');
const express = require('express');

const knexConfig = require('../../../knexfile').development;

const db = knex(knexConfig);

const routes = express.Router();

routes.use(express.json());

module.exports = routes;
