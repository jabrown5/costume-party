var express 	= require('express');
var router 		= express.Router();
// include our party model
var PartyModel 	= require('../models/Party');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// create a 'get' route that renders a "form.hbs"
// form.hbs contains a <form>
// w/ an <input> for each attribute on the model (4)

router.get('/home', renderSQL);
router.get('/form', renderForm);
router.post('/create', insertIntoParties);
router.get('/:id', renderPartyById);

function renderPartyById(req, res, next) {
	// call my individual model.
	// 1st, i need the ID from req/params
	var id = parseInt(req.params.id);
	console.log(typeof id);
	if (typeof id != 'number') {
		res.json({message: 'Invalid ID specified'});
	}
	PartyModel.where({
		id: id
	}).fetch().then(function(model) {
		console.log(model);
		res.render('party', model.attributes);
	});
};

function renderSQL(req, res, next) {
	// call my collection of rows (table)
	PartyModel.collection().fetch().then(function(models) {
		// res.render('all', models);
		res.json(models);
	});
};

function renderForm(req, res, next) {
	res.render('form', {

	});
};

function insertIntoParties(req, res, next) {
	console.log(req.body);


	var model = new PartyModel(req.body)
	.save()
	.then(function(data) {
		res.render('success', data.attributes);

	});
	// if you never res.json, send, render....
	// the server never finishes the request
	// so express freezes forever until ctrl-c
	// res.json(req.body);

};

module.exports = router;
