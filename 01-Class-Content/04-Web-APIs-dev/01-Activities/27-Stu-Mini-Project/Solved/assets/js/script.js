var chosenWord = "";
var lettersInChosenWord = [];

var numBlanks = 0;
var blanksLetters = [];
var winCounter = 0;
var lossCounter = 0;
var words = [];

var button = document.querySelector(".button");

function startGame() {
   getWords()
  renderBlanks()
  storeWords();
}

function winGame() {
  document.querySelector(".word-blanks").innerHTML = "YOU WON!!!🏆 ";
  winCounter++
  updateWins()
}

function loseGame() {
  document.querySelector(".word-blanks").innerHTML = "GAME OVER ";
  lossCounter++
  updateLosses()
}

function resetGame() {
  document.querySelector(".word-blanks").innerHTML = "J _ v _ S c r_ _t";
  winCounter = 0;
 lossCounter = 0;

}

function updateWins() {
  return document.querySelector(".win").innerHTML = winCounter
}

function updateLosses() {
  return document.querySelector(".losses").innerHTML = winCounter
}

function getWords() {
  var storedWords = JSON.parse(localStorage.getItem("storedWords"));

  if (storedWords === null) {
    words = ["variable","array","object","string","boolean","function","modulus"];
  } else {
    words = storedWords;
  }
}

function storeWords() {
  return localStorage.setItem("storedWords", JSON.stringify(words));
}

function renderBlanks() {
  console.log(words)
  chosenWord = words[Math.floor(Math.random() * words.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  blanksLetters = [];
  console.log(words)

  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_");
  }
  document.querySelector(".word-blanks").innerHTML = blanksLetters.join(" ")
}

function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        blanksLetters[j] = letter;
      } 
    }
   document.querySelector(".word-blanks").innerHTML = blanksLetters.join(" ")
  }
}

document.addEventListener("keydown", function(event) {
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  
  if (alphabetNumericCharacters.includes(key)) {
    
    var letterGuessed = event.key.toLowerCase();
    checkLetters(letterGuessed)
  } 


});

button.addEventListener("click", startGame);

