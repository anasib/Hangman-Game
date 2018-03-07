
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
//win
var winCount = document.getElementById('winRatio');
//lose
var loseCount = document.getElementById('loseRatio');

var actor1 = document.getElementById('alpacino');
var actor2 = document.getElementById('bradPitt');
var actor3 = document.getElementById('tomCruise');
var actor4 = document.getElementById('tomHanks');
var actor5 = document.getElementById('robertDeniro');

//js code below

window.onload = function () {

    underscore = function () {
        for (var i = 0; i < randomWord.length; i++) {
            if(lettersInWord[i] === " ") {
                dashes.push(" ");
            } else {
                dashes.push("-");
            }
        }
        return dashes;
    }
    underscore();

    console.log(dashes.join(''));


            //restart game
            function restartGame() {
                location.reload();
            }

    document.onkeyup = function (event) {
        var key = event.key;

        for (var i = 0; i < randomWord.length; i++) {
            console.log(key);
            console.log(lettersInWord[i]);
            if(key === lettersInWord[i]) {
                dashes[i] = key;
            } 

            sessionStorage.setItem("wins", wins);
            sessionStorage.setItem("lose", loss);
            correctGuess.innerText = "Correct Letters: " + dashes.join('');
            wrongGuess.innerHTML = "Wrong Guesses: " + key;
    
            document.querySelector("#remainingGuess").innerHTML = guessesLeft;

        }
        guessesLeft--;
        remainigLetters.innerHTML = "Guesses Left " + guessesLeft;

        if(guessesLeft >= 0) {
            winCount.innerHTML = "Wins: " + wins;
        } else {
            loseCount.innerHTML = "Lose: " + loss;
        }




        
    }

};