var randomNumber = Math.ceil(Math.random() * 100);


var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
// doc. selects soemthing from the DOM but it is HTML data

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

guessField.addEventListener('keyup', keyupHandler)

var guessCount = 1;
var resetButton;

function keyupHandler(event) {
console.log('A key up, keyCode:' + event.keyCode);

// if the key pressed was ENTER
if(event.keyCode === 13) {
  guessSubmit.click();
 }
}

function checkGuess() {
var userGuess = Number(guessField.value);

if(guessField.value === '') {
return;  
}

if(userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
  lastResult.textContent = "That wasn't a valid guess, try again!";
  lastResult.style.backgroundColor = 'red';
  guessField.value = '';
  guessField.focus();
  return;

}

  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += userGuess + ' ';

// LOGIC GOES HERE if will always be your logic criteria
if(userGuess === randomNumber){
// the user guessed the correct Number
lastResult.textContent = "Congratulations! You got it right!"
lastResult.style.backgroundColor = 'green';
lowOrHi.textContent = '';
setGameOver();
} else if (guessCount === 10) {
  // the user is out of guesses
  lastResult.textContent = "!!!GAME OVER!!!"
  lastResult.style.backgroundColor = "red";
  setGameOver();
} else {
  // the user still has guesses left
  lastResult.textContent = "Wrong!";
  lastResult.style.backgroundColor = "red";
  if(userGuess < randomNumber) {
    lowOrHi.textContent = "Last guess was too low!"
  } else {
    lowOrHi.textContent = "Last guess was too high!"
  }
}


    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
// do some work
guessField.disabled = true;
guessSubmit.disabled = true;
resetButton = document.createElement('button')
//                      ⬆️ create a new HTML tag
resetButton.textContent = 'Start new game'
document.querySelector('.form').appendChild(resetButton);
// document.body.appendChild(resetButton);
// doc. pulling from DOM/HTML (appendChild add to the body)
resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

lastResult.style.backgroundColor = 'white';

guessSubmit.disabled = false;
guessField.disabled = false;

resetButton.parentNode.removeChild(resetButton);

guessField.value = '';
guessField.focus();

randomNumber = Math.ceil(Math.random() * 100);

}

guessSubmit.addEventListener('click', checkGuess);


