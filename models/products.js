var mongoose = require('mongoose');

// productSchema

var productSchema = mongoose.Schema({
	id: String,
	name: String,
	price: String,
	details: String,
	quantity: String,
	image: String
	
});

var Product = module.exports = mongoose.model('Product', productSchema);

module.exports.getProducts = function(callback, limit){
	Product.find(callback).limit(limit);
};