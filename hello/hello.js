

const megaPrototype = {
	ping: function() {
		console.log('PING');
	}
};

const personPrototype = Object.create(megaPrototype);

personPrototype.name = 'I AM PROTOTYPE';
personPrototype.sayHi = function(day) {
	console.log('This is', this.name, 'Today is', day);
}

function createPerson(name, age) {
	const person = Object.create(personPrototype);

	person.name = name;
	person.age = age;

	return person;
}

const pete = createPerson('Pete', 27);
const jon = createPerson('Jon', 32);

pete.sayHi('tuesday');
pete.ping();
jon.sayHi('wednesday');