var express = require('express');
var router = express.Router();
var Artist = require('../lib/artist');
var debug = require('debug')('my-application:artists');
var _ = require('lodash');

/* GET list artists */
router.get('/', function(req, res) {
  	Artist.find({}, function(err, artists){
  	if(err){
  		return res.send(err);
  	}
  	res.render('artists/index', {artists:artists});
  	//res.send({artists:artists});
  });
  

});

//AGREGAR UN ARTISTA A LA COLECCION
router.get('/add', function(req, res){
	res.render('artists/add');
});

router.get('/:artist_id', function(req, res){

	Artist.findById(req.params.artist_id,function(err, artist){
		res.render('artists/detail', {artist:artist});
	});

});

router.post('/', function(req, res){
	debug('creating new artist');
	var name = req.body.name;

	if(!_.isUndefined(name) || name !== '')
	{
		var artist = new Artist({name:name});
		artist.save(function(err, artist){
			if(err){
				return res.send(err);
			}
			res.send(artist.name + 'was saved');
		});
	}
	else
	{
		res.send('Please specify artist name');
	}
});

module.exports = router;
