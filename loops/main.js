// loops 

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


// FOR loops 
for( let i = 0; i < 10; i++){
    console.log(i);
}

// WHILE loops
let i = 0;
while(i <10) {
    console.log(`WHile loop number: ${i}`);
    i++;
}

// Loop through arrays
for( let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo)
}

//recommended -- forEach, map, filter
todos.forEach(function(todo) {
    console.log(`for each: ${todo.text}`);
});

const todoText = todos.map(function(todo) {
    return todo.text;
}); // returns an array

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);

const todoCompletedText = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompletedText);

