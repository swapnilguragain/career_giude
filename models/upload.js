var mongoose = require('mongoose');

// uploadSchema

var uploadSchema = mongoose.Schema({
	image: String,
	height: String,
	width: String,
	length: String,
	type: String,
	costLimit: number
	
});

var Upload = module.exports = mongoose.model('Upload', uploadSchema);

model.exports.getUploads = function(callback, limit){
	Upload.find(callback).limit(limit);
};