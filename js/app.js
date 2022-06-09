'use strict';

let userName = prompt('What is your name?');
alert('Hello, ' + userName + '.');

let userScore = 0;

// write a function that gets a question and returns whether or not it is correct.
// QandA : 2d array
function isCorrect(index, QandA) {

  let question = QandA[index][0];
  let answer = QandA[index][1];

  console.log(question, answer);
  let response = prompt(`${question}\n Enter "Y" or "y" for Yes, "N" or "n" for No`).toLowerCase();
  // how to check if correct?
  if (response === answer) {
    return 1;
  } else {
    return 0;
  }
}

let questionsAndAnswers = [['Is Josh\'s last name spelled "Frazier"?', 'n'],
  ['Has Josh ever lived in India?', 'n'],
  ['Has Josh ever lived in Korea?', 'y'],
  ['Does Josh like football?', 'n'], 
  ['Has Josh ever eaten balut?', 'y']];

let correctAndIncorrectResponses = [['Correct. It\'s "Frazer".', 'Incorrect! Please stop doing that.'],
  ['Correct, but he\'d like to visit.', 'Incorrect, not yet anyway.'],
  ['Correct. He lived there for two years.', 'Incorrect, he did live there.'],
  ['Correct. Josh is not interested in football.', 'Incorrect. Josh doesn\'t watch football.'],
  ['Correct. It tastes a bit like duck soup.', 'Incorrect. Josh enjoyed balut.']];

for (let questionNumber = 0; questionNumber < questionsAndAnswers.length && questionNumber < correctAndIncorrectResponses.length; questionNumber++) {
  const correct = isCorrect(questionNumber, questionsAndAnswers);
  console.log(correct);
  // let question = questionsAndAnswers[questionNumber][0];
  // let correctAnswer = questionsAndAnswers[questionNumber][1];
  // let correctResponse = correctAndIncorrectResponses[questionNumber][0];
  // let incorrectResponse = correctAndIncorrectResponses[questionNumber][1];
  // let userAnswer = prompt(`${question}\n Enter "Y" or "y" for Yes, "N" or "n" for No`).toLowerCase();
  // if (userAnswer === correctAnswer) {
  //   alert(correctResponse);
  //   userScore += 1;
  // }
  // else {
  //   alert(incorrectResponse);
  // }
}

let numberAnswer = Math.floor(Math.random() * 10) + 1;
for (let attempts = 4; attempts > 0; attempts--) {
  let userAnswer = parseInt(prompt('Guess a number between 1 and 10'));
  if (userAnswer === numberAnswer) {
    alert('Correct, the number was ' + numberAnswer);
    userScore += 1;
    break;
  }
  else {
    if (attempts === 1) {
      alert(`Sorry, that was your last try. The number was ${numberAnswer}`);
      break;
    }
    if (userAnswer > numberAnswer) {
      alert(`You guessed too high. You have ${attempts - 1} tries remaining.`);
    }
    else {
      alert(`You guessed too low. You have ${attempts - 1} tries remaining.`);
    }
  }
}

let possibleAnswers = ['Japan', 'Korea', 'South Korea', 'Qatar', 'United Arab Emirates', 'UAE', 'Philippines', 'The Philippines', 'Taiwan', 'Germany', 'Canada', 'Greece', 'UK', 'United Kingdom', 'The UK', 'The United Kingdom', 'Britain', 'England'];
let userCorrect = false;
for (let attempt = 6; attempt > 0; attempt--){
  let userAnswer = prompt('Try naming a country (besides the US )that Josh has been to: ').toLowerCase();
  for (let index = 0; index < possibleAnswers.length; index++) {
    if (userAnswer === possibleAnswers[index].toLowerCase()) {
      alert(`Correct, Josh has been to ${possibleAnswers[index]}`);
      userCorrect = true;
    }
  }
  if (userCorrect) {
    userScore += 1;
    break;
  }
  else {
    alert('Sorry, that is not in the list of correct answers. You have ' + (attempt - 1) + ' tries remaining. Please try again.');
  }
}
alert('The possible answers were: ' + possibleAnswers);

alert(`${userName}, your score was ${userScore}. Thanks for playing.`);
