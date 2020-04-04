// Arrays
/* 
multiline
*/

// not used mostly
const numbers = new Array(1,2,3,4,5);

const fruits = ['apples', 'oranges', 'pears',10, true]

fruits[3] = 'grapes';
// fruits[-1] = 'here'; // -1 index


fruits.push('mangos');
fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'));


console.log(fruits[1])
console.log(fruits)


// type script for static types


