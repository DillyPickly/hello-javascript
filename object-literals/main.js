// object literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music','movies','sports'],
    address:{
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}


console.log(person);
console.log(person.firstName, person.lastName);

console.log(person.hobbies[1]);
console.log(person.address.city);


const { firstName, lastName, address: { city }, hobbies } = person;

console.log(city);


const todos = [
    {
        id:1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'meeting',
        isCompleted: true
    },
    {
        id:2,
        text: 'Dentist',
        isCompleted: false
    },
];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


