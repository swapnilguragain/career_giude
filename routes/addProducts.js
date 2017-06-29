var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Products = require('../models/products');

router.post('/insert', function(req, res){
	var products = new Products(req.body);
	products.save(function(err, doc){
		if (err) throw err;
		res.redirect('/');
	});
});


module.exports = router;