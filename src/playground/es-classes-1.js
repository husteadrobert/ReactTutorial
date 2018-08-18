class Person {
  constructor(name = "Default Name", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello. I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person { 
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler("Robert Hustead", 34, "Kansas");
console.log(me);
console.log(me.getGreeting());

const another = new Traveler();
console.log(another);
console.log(another.getGreeting());
