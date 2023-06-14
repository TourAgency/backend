// Third Party Dependencies
const express = require('express');
const dotenv = require('dotenv');
const indexRouter = require("../routes/index.routes")
// Local Dependencies


const server = express();

// JSON Body Parser
server.use(express.json());

// Morgan
server.use(require('morgan')('dev'));

server.use("/", indexRouter)


module.exports = server;
