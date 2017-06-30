var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })
var router = express.Router();
var mongoose = require('mongoose');

const Uploads = require('../models/upload');

router.post('/insert', upload.single('image'), function(req, res){
	var uploads = new Uploads(req.body);
	uploads.image = req.file.path;
	uploads.save(function(err, doc){
		if (err) throw err;
		res.redirect('/');
	});
});

module.exports = router;