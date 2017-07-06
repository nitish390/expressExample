var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bulldog = new Schema({
	name: String,
	age:Number,
	collar_id:String
})


module.exports = mongoose.model('bulldog', bulldog);