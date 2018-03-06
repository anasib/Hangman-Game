
//actors name to guess
var randomActorArr = ["brad pitt", "tom cruise", "al pacino", "tom hanks", "robert deniro"];
//randomly chosen actor
var randomWord = randomActorArr[Math.floor(Math.random() * randomActorArr.length)];

var correctLetter = [];
var wrongLetters = [];
var dashes = [];

var wins = 0;
var loss = 0;
var guessesLeft = 12;

//choose random words
var lettersInWord = randomWord.split('');
console.log(lettersInWord);

//actors names
var correctGuess = document.getElementById('correct');
//correct letters
var wrongGuess = document.getElementById('wrong');
//wrong letters
var remainigLetters = document.getElementById('remainingGuess');

var actor1 = document.getElementById('alpacino');
var actor2 = document.getElementById('bradPitt');
var actor3 = document.getElementById('tomCruise');
var actor4 = document.getElementById('tomHanks');
var actor5 = document.getElementById('robertDeniro');

//js code below

window.onload = function () {

    underscore = function () {
        for (var i = 0; i < randomWord.length; i++) {
            dashes.push('_');
        }
        return dashes;
    }
    underscore();

    document.onkeyup = function (event) {
        var key = event.key;

        for (var i = 0; i = randomWord.length; i++) {
            if (correctLetter.indexOf(key) !== -1) {
                return false;
            }
            if (wrongLetters.indexOf(key) !== -1) {
                return false;
            }

            //restart game
            function restartGame() {
                location.reload();
            }

            sessionStorage.setItem("wins", wins);
            sessionStorage.setItem("lose", loss);

            correctLetter.push(key);
            dashes.push(key);
            correctGuess.innerText = "Correct Letters: " + dashes.join(' ');
            wrongGuess.innerText = "Wrong Guesses: " + correctLetter.join(' ');

            if (randomWord.indexOf(key) > -1) {
                correctLetter.push(' ' + key);
                dashes[randomWord.indexOf(key)] = key;
                correctGuess[0].innerHTML = dashes.join(' ');
                correctGuess[0].innerHTML = correctLetter;


                if (dashes.join(' ') === randomWord) {
                    alert("Winner!!!");
                    return restartGame();
                }

            } else {
                wrongLetters.push(' ' + key);
                remainigLetters[0].innerHTML = wrongLetters;
                guessesLeft--;

                if (guessesLeft == 0) {
                    alert("Loser!!!");
                    return restartGame();
                }
            }

            document.querySelector("#remainingGuess").innerHTML = guessesLeft;

        }
    }

};