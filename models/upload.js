var mongoose = require('mongoose');

// uploadSchema

var uploadSchema = mongoose.Schema({
	
	height: String,
	length: String,
	width: String,
	costLimit: String,
	type: String,
	description: String,
	image: String
});

var Upload = module.exports = mongoose.model('Upload', uploadSchema);

module.exports.getUploads = function(callback, limit){
	Upload.find(callback).limit(limit);
};