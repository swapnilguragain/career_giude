var mongoose = require('mongoose');

// profileSchema

var profileSchema = mongoose.Schema({
	name: String,
	email: String,
	password: String,
	address: String,
	phone: String
});

var Profile = module.exports = mongoose.model('Profile', profileSchema);

model.exports.getProfiles = function(callback, limit){
	Profile.find(callback).limit(limit);
};