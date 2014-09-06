var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://hecto932:20162504h@kahana.mongohq.com:10073/curso_node');

//ES LA ESTRUCTURA DE NUESTRO MODELO
var artistSchema = new Schema({
	name: String,
	slug: String,
	albums:[{
		title: String,
		year: Number,
		image: String
	}],
	shows: [{
		city: String
	}]
});

var Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;