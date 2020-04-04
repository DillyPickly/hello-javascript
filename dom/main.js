// console.log(window)

// Element Selectors

// Single ELement Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1')); 
// only selects the first one


// Multiple Element selectors
console.log(document.querySelectorAll('.item')); 
// always use query selctor all
console.log(document.getElementsByClassName('item')); 
console.log(document.getElementsByTagName('li')); 

// can loop through items
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item))


