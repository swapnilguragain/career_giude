var mongoose = require('mongoose');

// productSchema

var productSchema = mongoose.Schema({
	id: number,
	name: String,
	price: number,
	details: String,
	quantity: number,
	image: String
	
});

var Product = module.exports = mongoose.model('Product', productSchema);

model.exports.getProducts = function(callback, limit){
	Product.find(callback).limit(limit);
};