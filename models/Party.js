
var db = require('./db'); // pulling in db.js
/* We set up our ORM (bookshelf.js) and pass it our database (knex.js) */
var bookshelf = require('bookshelf')(db);

// Model correlates to a row in the DB
// Collections correlate to tables in a DB
// Bookshelf uses both of these terms
var PartyModel = bookshelf.Model.extend({
	tableName: 'parties'
});

console.log('PartyModel has loaded. Ready to party hard?!');

module.exports = PartyModel ;


