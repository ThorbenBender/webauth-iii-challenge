const express = require('express');
const helmet = require('helmet');
const registerRoute = require('./api/register/registerRoute');
const loginRoute = require('./api/login/loginRoute');
const userRoute = require('./api/user/userRoute');
const session = require('express-session');
const cors = require('cors');

const server = express();

const sessionConfig = {
	name: 'User',
	secret: 'dunno',
	cookie: {
		maxAge: 1 * 24 * 60 * 60 * 1000,
		secure: false
	},
	httpOnly: true,
	resave: true,
	saveUninitialized: true
};

server.use(cors());

server.use(helmet());

server.use(session(sessionConfig));

server.use('/api/register', registerRoute);

server.use('/api/login', loginRoute);

server.use('/api/users', userRoute);

module.exports = server;
