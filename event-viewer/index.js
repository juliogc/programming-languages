'use strict';

require('dotenv').config();
require('./config/db').connect();

const express = require('express');

const Language = require('./model/language');
const app = express();

Language.register(app, '/language');

module.exports = app;