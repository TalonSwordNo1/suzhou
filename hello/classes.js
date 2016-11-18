
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getGreeting() {
		return 'I am ' + this.name;
	}

	sayHi() {
		console.log(this.getGreeting());	
	}
}

class Student extends Person {
	constructor(name, age, score) {
		super(name, age);
		this.score = score;
	}

	getGreeting() {
		return super.getGreeting() + ' my score is ' + this.score;
	}
}

const peter = new Student('Peter', 21, 17);
peter.sayHi();
