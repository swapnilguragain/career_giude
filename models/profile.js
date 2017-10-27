var mongoose = require('mongoose');

// profileSchema

var profileSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
    	required: true
	},
	confirmPassword: {
		type: String,
    	required: true
	},
	address: String,
	phone: String
});

var Profile = module.exports = mongoose.model('Profile', profileSchema);

module.exports.getProfiles = function(callback, limit){
	Profile.find(callback).limit(limit);
};