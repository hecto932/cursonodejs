var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hello World!');
});

app.listen(3000);
console.log('Si ves esto ve a http://localhost:3000 \n oprime CTRL + C para apagar el servidor ');

