
const pete = {
	name: 'Pete',
	sayHi: function(day) {
		console.log('This is', this.name, 'Today is', day);
	}
};

const jack = {
	name: 'Jack'
}

const hi = pete.sayHi;

// hi.call(jack, 'Monday');
// hi.apply(jack, ['Monday']);


const hiBoundToPete = hi.bind(pete);

hiBoundToPete('Tuesday');
