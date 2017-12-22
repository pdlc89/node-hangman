//load the required files and information

var inquirer = require("inquirer");
var letter = require("./letter");
var word = require("./word");

// set global veriables

var isCorrect = false;
var userTally = 0;
var gamesPlayed = 0;
var gamesLeft = 10;
var computerGuess= "3";
var userGuess = "9";

//choose a random word
var words = ["HOME", "WORLD", "STORE", "COMPUTER", "COMPLY", "ANTONYMS"];
 computerGuess = words[Math.floor(Math.random()*words.length)];
	console.log (computerGuess);
//creates a varaible to hold the computer's guess and turns it into an array
	var holder = computerGuess.split("");
//shoows the computer's guess on the console
	console.log(holder);
console.log("Welcome to Node.js Hangman!")
console.log("--------------------------------");

var game = function() {

	if (gamesLeft != 0) {
		gamesLeft--;
		inquirer.prompt([
		{
		type: "input",
		name: "userGuess",
		message: "Guess a letter, and hit 'Enter'."
		}
		]);
		game();
	}
}

game();
module.exports = holder;