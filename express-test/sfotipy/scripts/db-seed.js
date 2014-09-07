var Artist = require('../lib/artist');

var justin = new Artist({
	name: 'Justin Bieber',
	slug: 'justin-bieber',
	albums: [
		{title: 'Believe Acoustic', year: 2013, image: 'believe-acoustic' },
		{title: 'Belive', year: 2012, image: 'believe' },
		{title: 'Under The Mistletoe', year: 2011, image: 'under-the-mistletoe' },
		{title: 'My World 2.0', year: 2010, image: 'my-world-2.0' }
	],
	shows: [
		{city: 'Bogota'},
		{city: 'Medellin'},
		{city: 'Melgar'},
		{city: 'Guadalajara'},
		{city: 'Buenos Aires'},
		{city: 'Brasilia'}
	]
});

justin.save(function (err, justin){
	console.log('Justin was saved.');
});