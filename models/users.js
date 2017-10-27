var mangoose = require('mongoose');

//user schema

var userSchema = mangoose.Schema({
	username: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	password: {
		type: String,
    	required: true
	},
	confirmPassword: {
		type: String,
    	required: true
	}
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}