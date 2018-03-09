var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Profile = require('../models/profile');

router.post('/login', function(req, res){
	var	email = req.body.email;
	var password = req.body.password;

	Profile.findOne({email: email, password: password}, function(err, profile){
		if (err) {
			console.log(err);
			res.redirect('/');
		}
		if (!profile) {
			res.redirect('/');	
		}
		res.redirect('/');
	});
});

router.post('/insert', function(req, res){
	console.log(req.body);

	var name = req.body.name;
	var	email = req.body.email;
	var password = req.body.password;
	var confirmPassword = req.body.confirmPassword;
	var address = req.body.address;
	var phone = req.body.phone;



	var newProfile = new Profile;
	newProfile.name = name;
	newProfile.email = email;
	newProfile.password = password;
	newProfile.confirmPassword = confirmPassword;
	newProfile.address = address;
	newProfile.phone = phone;

	newProfile.save(function(err, doc){
		if (err) throw err;
		res.redirect('/');
	});
});


module.exports = router;