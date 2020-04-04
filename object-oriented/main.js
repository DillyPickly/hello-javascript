// can use constructors with prototypes or ES6 classes
// javascript uses functions for objects

// constructor funciton 
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// ProtoTypes are better than defining function in constructor
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

// Instantiate Object
const person1  = new Person('John', 'Doe', '4-3-1980');
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName())

// Classes are syntactic sugar that makes objects prettier
class Car {
    constructor(model, type, hp, date) {
        this.model = model;
        this.type = type;
        this.hp = hp;
        this.date = new Date(date);
    }

    getYearMade() {
        return this.date.getFullYear();
    }

    getCarDetails() {
        return `${this.model} ${this.type}`;
    }
}

const car  = new Car('Chevy', 'Gas', 200, '4-3-1980');
console.log(car.getYearMade());
console.log(car.getCarDetails());

