function addNums(num1 = 1, num2 = 1) {
    return num1 + num2
}

console.log(addNums(11,2));
console.log(addNums());

// arrow funcitons
const arrow = (num1 = 1, num2 = 1) => {
    return num1 + num2
}

console.log(arrow());

const arrow1 = (num1 = 1, num2 = 1) => num1 + num2;
const addFive = num1 => num1 + 5;
// good for for each

console.log(arrow1(5,5));

// they have a lexical this
