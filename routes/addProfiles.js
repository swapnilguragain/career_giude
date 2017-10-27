var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Profile = require('../models/profile');

router.post('/insert', function(req, res){
	console.log('::::yes');

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