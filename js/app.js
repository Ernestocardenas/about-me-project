'use strict';

var score = 0;
var nameinput = prompt('What is your name?');
// console.log('Hello! Welcome to my page, ' + nameinput + '. My name is Ernesto. Let\'s play a game. I\'m going to ask you five questions, to see if you really know me.');
alert('Hello! Welcome to my page, ' + nameinput + '. My name is Ernesto. Let\'s play a game. I\'m going to ask you seven questions, to see if you really know me. You answer to your best ability, and I\'ll let you know at the end how well you did.');

// Question 1
function question1() {
  var answer1 = prompt('Am I from a foreign country?', 'Type yes or no.').toLowerCase();
  while (answer1 !== 'yes' && answer1 !== 'no' && answer1 !== 'y' && answer1 !== 'n') {
    answer1 = prompt('Please answer yes or no....nothing else');
  }
  if (answer1 === 'yes' || answer1 === 'y') {
    // console.log('That\'s right, I\'m from Cuba!');
    alert('That\'s right, I\'m from Cuba!');
    score++;
  } else if (answer1 === 'no' || answer1 === 'n') {
    // console.log('Nope, your incorrect, I\'m from Cuba!');
    alert('Nope, your incorrect, I\'m from Cuba!');
  }
}

// Question 2
function question2() {
  var answer2 = prompt('Am I a Travel Fan?', 'Type yes or no.').toLowerCase();
  while (answer2 !== 'yes' && answer2 !== 'no' && answer2 !== 'y' && answer2 !== 'n') {
    answer2 = prompt('Please answer yes or no....nothing else');
  }
  if (answer2 === 'yes' || answer2 === 'y') {
    // console.log('absolutely correct, I love to travel!');
    alert('Absolutely correct, I love to travel');
    score++;
  } else if (answer2 === 'no' || answer2 === 'n') {
    // console.log('WRONG ANSWER! I want to travel the world!');
    alert('WRONG ANSWER! I want to travel the world!');
  }
}

// Question 3
function question3() {
  var answer3 = prompt('Do I like Coffee?', 'Type yes or no.').toLowerCase();
  while (answer3 !== 'yes' && answer3 !== 'no' && answer3 !== 'y' && answer3 !== 'n') {
    answer3 = prompt('Please answer yes or no....nothing else');
  }
  if (answer3 === 'yes' || answer3 === 'y') {
    // console.log('Of course I do, I\'m from Canada!');
    alert('Of course I do, I\'m from Cuba!');
    score++;
  } else if (answer3 === 'no' || answer3 === 'n') {
    // console.log('WRONG ANSWER! I\'m from Cuba!');
    alert('WRONG ANSWER! I\'m from Cuba!');
  }
}

// Question 4
function question4() {
  var answer4 = prompt('Do I watch Soccer?', 'Type yes or no.').toLowerCase();
  while (answer4 !== 'yes' && answer4 !== 'no' && answer4 !== 'y' && answer4 !== 'n') {
    answer4 = prompt('Please answer yes or no....nothing else');
  }
  if (answer4 === 'yes' || answer4 === 'y') {
    // console.log('Of course I do, I\'m from Cuba!');
    alert('Of course I do, I\'m from Cuba!');
    score++;
  } else if (answer4 === 'no' || answer4 === 'n') {
    // console.log('WRONG ANSWER! I love Soccer!');
    alert('WRONG ANSWER! I love Soccer!');
  }
}
// Question 5
function question5() {
  var answer5 = prompt('Do I listen to Salsa?', 'Type yes or no.').toLowerCase();
  while (answer5 !== 'yes' && answer5 !== 'no' && answer5 !== 'y' && answer5 !== 'n') {
    answer5 = prompt('Please answer yes or no....nothing else');
  }
  if (answer5 === 'yes' || answer5 === 'y') {
    // console.log('Nope, just because I\'m from Cuba, doesn\'t mean that I like Salsa!');
    alert('Nope, just because I\'m from Cuba, doesn\'t mean that I like Salsa!. Thanks for playing ' + nameinput + '.');
  } else if (answer5 === 'no' || answer5 === 'n') {
    // console.log('You are correct! Just because I\'m from Cuba, doesn\'t mean that I like Salsa!');
    alert('You are correct! Just because I\'m from CUba, doesn\'t mean that I like Salsa! Thanks for playing ' + nameinput + ', now on to some tricky questions.');
    score++;
  }
}
// Question 6
function question6() {
  var attempts = 0;
  var answer6 = Number(prompt('I\'m thinking of a number between 1 and 10. Can you guess what that number is? I\'ll give you four bites at the apple'));
  while (attempts < 3) {
    attempts++;
    if (answer6 < 7) {
      // console.log('Good guess, but not quite right. Too low. Try again.');
      answer6 = Number(prompt('Good guess, but not quite right. Too low. Try again.'));
    } else if (answer6 > 7) {
      // console.log('Good guess, but not quite right. Too high. Try again.');
      answer6 = Number(prompt('Good guess, but not quite right. Too high. Try again.'));
    } else if (answer6 === 7) {
      // console.log('Hey, you\re good at this, nice work.');
      alert('Hey, you\'re good at this, nice work.');
      attempts = 10;
      score++;
    }
  }
  if (attempts === 3) {
    alert('Out of guesses and and all of them are wrong. The correct answer is 7');
  }
}
// Question 7
function question7() {
  var attempts7 = 0;
  var answer7 = prompt('If I could eat only four foods for the rest of my life, I would be just fine. I\'ll give you six chances for you to name just one of those four?').toLowerCase();
  var foodsILike = ['peanut butter', 'steak', 'seafood', 'rice'];
  while (attempts7 < 5) {
    attempts7++;
    for (var i = 0; i < foodsILike.length; i++) {
      if (answer7 === foodsILike[i]) {
        // console.log('Nice work");
        alert('Nice Work');
        attempts7 = 10;
        score++;
      }
    }
    if (attempts7 !== 10) {
      // console.log('Try again');
      answer7 = prompt('Try Again').toLowerCase();
    }
  }
  if (attempts7 === 5) {
    alert('Out of guesses and you were doing so well. By the way, the correct answers are peanut butter, steak, seafood and rice');
  }
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();

alert(`Thanks for answering my questions ${nameinput}, you got ${score} correct!`);
