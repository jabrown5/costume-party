# costume-party
Costume party practice

## 1. SQL commands for creating a database + user
-- We create a DB for every project and a specific user in the db for that project. This is for security purposes!


```
create database costume_party
create user 'l33tdba'@'localhost' identified by 'yellowpencil';
grant all privileges on constume_party.* to 'l33tdba'@'localhost';

use costume_party 
-will change into that DB if you are not in it already

```

## 2. Environment Variables
Our environment variables are stored in .env but may also be declared as needed.

```
DB_USER	= l33tdba
DB_PWD 	= yellowpencil
DB_NAME = costume_party
DB_TYPE = mysql
DB_SERVER = localhost

FOR ME -----> 
DB_HOST=localhost
DB_USR=jen
DB_PW=w0rk5pac3
DB_NAME=costume_party
DB_ADAPTER=mysql

```
## 3. Database Connect

A DB connection is defined insit of db.js. It contains all code needed to connect to mySQL.

```
// ./models/db.js

'use strict';

// loads environment variables from .env
// knex is a db adapter for note
// npm install knex and npm install lodash
// lodash is a dependency of knex
require('dotenv').config();

var db = require('knex')({
	client: process.env.DB_TYPE,
	connection: {
		host: process.env.DB_SERVER,
		user: process.env.DB_USER,
		password: process.env.DB_PWD,
		database: process.env.DB_NAME
	}
});

module.exports = db ;

// INSTALL VIA TERMINAL:
// npm install dotenv --save
// npm install knex --save
// npm install lodash --save

```
