

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.getGreeting = function() {
	return 'I am ' + this.name;
}

Person.prototype.sayHi = function() {
	console.log(this.getGreeting());
}

function Student(name, age, score) {
	Person.call(this, name, age);
	this.score = score;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.getGreeting = function() {
	return Person.prototype.getGreeting.call(this) + ' my score is ' + this.score;
}

const peter = new Student('Peter', 27, 5);
peter.sayHi();