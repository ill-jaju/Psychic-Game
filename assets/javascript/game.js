//variables
//available choices
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
				'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//starting variables
var wins = 0;
var losses = 0;
var guesses = 8;
var guessedLetters = [];

//initial comp choice
var compChoice = letters[Math.floor(Math.random() * letters.length)];

//function to reset game w/o refreshing page
var reset = function() {
    guesses = 8;
    guessedLetters = [];
//resets computer choice    
    compChoice = letters[Math.floor(Math.random() * letters.length)];
    }

//player initiates game with key press
document.onkeyup = function (event) {
//changes input to lower case   
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);

    if (userGuess === compChoice) {
    	wins ++;
        reset();
    	}
    else {
    	guesses--;
    }

    if (guesses === 0) {
    	losses++;
        reset();
    }
 //visual changes to html   
	document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guesses;
    document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters.join(', ');
};