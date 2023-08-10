class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		let sentence = "";
		if (this.age > other.age) {
			sentence = other.name + " is younger than me.";
		} else if (this.age < other.age) {
			sentence = other.name + " is older than me.";
		} else {
			sentence = other.name + " is the same age as me.";
		}
		return sentence;
	}

}