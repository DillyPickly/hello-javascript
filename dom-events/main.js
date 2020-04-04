// Style changes
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('#my-form').style);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    // console.log(document.querySelector('body'))

    ul = document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('#my-form').style);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    // console.log(document.querySelector('body'))

    ul = document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('#my-form').style);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-light');
    // console.log(document.querySelector('body'))

    ul = document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});
