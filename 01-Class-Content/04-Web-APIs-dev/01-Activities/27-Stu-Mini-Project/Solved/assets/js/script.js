var chosenWord = "";
var lettersInChosenWord = [];

var numBlanks = 0;
var blanksLetters = [];
var winCounter = 0;
var lossCounter = 0;
var words = [];

// This reinforces the idea of a function as a reusable block of code
function startGame() {
  getWords()
  renderBlanks()
  storeWords();
}

// This reinforces storing array in local storage
function getWords() {
  var storedWords = JSON.parse(localStorage.getItem("storedWords"));

  if (storedWords === null) {
    words = ["variable","array","object","string","boolean","function","modulus"];
    console.log("new array")
  } else {
    words = storedWords;
  }
}

// This code is actually seen in  prior exercise
function storeWords() {
  return localStorage.setItem("storedWords", JSON.stringify(words));
}

// They have seen Math.random and similar functionality last week
function renderBlanks() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  blanksLetters = [];

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
    // Since writing code once is emphasized, this can be made DRY-er.
   document.querySelector(".word-blanks").innerHTML = blanksLetters.join(" ")
  }
}

// This uses event listener and keydown to match prior activities
document.addEventListener("keydown", function(event) {
  if (words.length === 0) {
    startGame()
  } else {
  // They see this exact code in an instructor demo and similar code in activity
  // .code could also be used but this is what was used before. 
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  
  if (alphabetNumericCharacters.includes(key)) {
    
    var letterGuessed = event.key.toLowerCase();
    checkLetters(letterGuessed)
  }
}
  
});

// TODO: Add timer functionality and wins/losses functionality with local storage

// ?? Do we need to show letters that are guessed but wrong?
