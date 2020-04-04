
const ul = document.querySelector('.items');

// ul.remove();

// ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'hello';
ul.children[1].innerText = 'Dylan';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// Style changes
const btn = document.querySelector('.btn');
btn.style.background = 'red';