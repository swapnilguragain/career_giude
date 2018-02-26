var mongoose = require('mongoose');

// creating schema

var designerSchema = mongoose.Schema({
	name : String,
	number : String,
	link : String,
	email: String,
	work : String
	// image : String
});

var Designer = module.exports = mongoose.model('Designer', designerSchema);

module.exports.getDesigner = function(callback, limit){
	Designer.find(callback).limit(limit);
}