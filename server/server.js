const express = require('express');
const helmet = require('helmet');
const registerRoute = require('./api/register/registerRoute');
const loginRoute = require('./api/login/loginRoute');

const server = express();

server.use(helmet());

server.use('/api/register', registerRoute);

server.use('api/login', loginRoute);

module.exports = server;
