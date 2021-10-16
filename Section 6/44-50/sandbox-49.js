const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href','https://www.yahoo.com');

link.innerText = 'Yahoo';

console.log(link.getAttribute('href'));

const message = document.querySelector('p');

console.log(message.getAttribute('class'));
message.setAttribute('style', 'color: red');

message.setAttribute('class', 'success');

console.log(message.getAttribute('class'));

message.setAttribute('style', 'color: green');