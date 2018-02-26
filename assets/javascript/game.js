var randomwWordArr = ["Brad Pitt", "Tom Cruise", "Al Pacino", "Tom Hanks", "Robert DeNiro",];
var randomWord = randomwWordArr[Math.floor(Math.random() * randomwWordArr.length)];

var count = 0;
var answerArr = [];
var s;
var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


var guessLeft = 9;
var win = 0;
var losses = 0;
var letterUse = [];

function countGuessesLeft () {
    document.querySelector("#remainingGuess").innerHTML = "Number of Guesses Remaining: " + guessLeft;
}


