var age = 12;

var state = 'single';

function sing()
{
	console.log('Lalalla');
}

function cry()
{
	console.log('Boo hoo boo');
}

function getArrested()
{
	console.log('oh noes, I am in jail');
}

module.exports = {
	sing: sing,
	cry: cry,
	getArrested : getArrested,
	state: state
};