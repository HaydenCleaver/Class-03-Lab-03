'use strict';

let userName = prompt('What is your name?');
//console.log('Hello, ' + userName + '.');
alert('Hello, ' + userName + '.');

let answer = prompt('Is Josh\'s last name spelled "Frazier"? \n Enter "Y" or "y" for Yes, "N" or "n" for No');
answer = answer.toLowerCase();
if (answer === 'y') {
  //console.log('Incorrect! Please stop doing that.');
  alert('Incorrect! Please stop doing that.');
}
else {
  //console.log('Correct. It\'s "Frazer".');
  alert('Correct. It\'s "Frazer".');
}

answer = prompt('Has Josh ever lived in India? \n Enter "Y" or "y" for Yes, "N" or "n" for No');
answer = answer.toLowerCase();
if (answer === 'y') {
  //console.log('Incorrect, not yet anyway.');
  alert('Incorrect, not yet anyway.');
}
else {
  //console.log('Correct, but he\'d like to visit.');
  alert('Correct, but he\'d like to visit.');
}

answer = prompt('Has Josh ever lived in Korea? \n Enter "Y" or "y" for Yes, "N" or "n" for No');
answer = answer.toLowerCase();
if (answer === 'y') {
  //console.log('Correct. He lived there for two years.');
  alert('Correct. He lived there for two years.');
}
else {
  //console.log('Incorrect, he did live there.');
  alert('Incorrect, he did live there.');
}

answer = prompt('Does Josh like football? \n Enter "Y" or "y" for Yes, "N" or "n" for No');
answer = answer.toLowerCase();
if (answer === 'y') {
  //console.log('Incorrect. Josh doesnt watch football.');
  alert('Incorrect. Josh doesnt watch football.');
}
else {
  //console.log('Correct. Josh is not interested in football.');
  alert('Correct. Josh is not interested in football.');
}

answer = prompt('Has Josh ever eaten balut? \n Enter "Y" or "y" for Yes, "N" or "n" for No');
answer = answer.toLowerCase();
if (answer === 'y') {
  //console.log('Correct. It tastes a bit like duck soup.');
  alert('Correct. It tastes a bit like duck soup.');
}
else {
  //console.log('Incorrect. Josh enjoyed balut.');
  alert('Incorrect. Josh enjoyed balut.');
}

alert('Thanks for playing, ' + userName + '.');
