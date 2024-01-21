// console.log(window);

// console.log(document.body);  // get the whole body
// console.log(document.head);  // get the whole head 
// console.log(document.body.innerHTML); //get the whole tags with content
console.log(document.body.innerText); // get only the text inside

// document.body.innerHTML = '<h1 > Hello world</h1>'  // this will turn the whole content of the body to hello world

console.log(document.getElementById('main'))

// const main = document.getElementById('main');

// main.innerHTML = '<h1 > Hello world</h1>';

document.querySelector('#main h1').innerText = 'Hello';