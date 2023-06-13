// Third Party Dependencies
const express = require('express');
const dotenv = require('dotenv');

// Local Dependencies


const server = express();

// JSON Body Parser
server.use(express.json());

// Morgan
server.use(require('morgan')('dev'));


module.exports = server;
