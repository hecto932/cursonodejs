var express = require('express');
var server = express();

server.get('/', function(req, res){
	swig = require('swig');

	server.engine('index.html', swig.renderFile );

	server.set('/', './app/views');

	res.send(swig.renderFile);
});

server.listen(3000);

console.log('Corriendo!');
