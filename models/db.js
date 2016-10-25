// ./models/db.js

'use strict';

// loads environment variables from .env
// knex is a db adapter for note
// npm install knex and npm install lodash
// lodash is a dependency of knex
require('dotenv').config();

var db = require('knex')({
  client: process.env.DB_ADAPTER,
  	connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USR,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
  }
});

module.exports = db ;

// INSTALL VIA TERMINAL:
// npm install dotenv --save
// npm install knex --save
// npm install lodash --save
