const x = 10;
const y = 20

if (x == 10) { // does not match double equals
    console.log('x is 10');
} 

if (x === 10) { // matches data types
    console.log('x is 10');
} else if(x > 10) {
    console.log('x > 10');
} else {
    console.log('x is less than 10');
}

if (x === 5 || y > 10) { // matches data types
    console.log('x is 10 and y is more that 10');
} 

// boolean operators
/*
or ||
and &&
*/

// trunary operator
const n = 10 
const color = n > 10 ? 'blue' : 'red'
console.log(color)

// switch statements
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}