var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Designer = require('../models/designer');

router.post('/insert', function(req, res) {
	// body...

	var name = req.body.name;
	var	number = req.body.number;
	var link = req.body.link;
	var email = req.body.email;
	var work = req.body.work;

	// todo image

	var newDesigner = new Designer;
	newDesigner.name = name;
	newDesigner.number = number;
	newDesigner.link = link;
	newDesigner.email = email;
	newDesigner.work = work;
	
	//todo image

	newDesigner.save(function(err, doc){
		if (err) throw err;
		res.redirect('/');
	});

});

module.exports = router;
