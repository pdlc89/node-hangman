//load the required files and information

var inquirer = require("inquirer");
var letter = require("./letter");
var prompt = require("prompt");
var word = require("./word");

// set global veriables

var isCorrect = false;
var userTally = 0;
var gamesPlayed = 0;
var gamesLeft = 10;
var computerGuess;
var userGuess;

//choose a random word
var words = ["HOME", "WORLD", "STORE", "COMPUTER", "COMPLY", "ANTONYMS"];
 computerGuess = words[Math.floor(Math.random()*words.length)];
//creates a varaible to hold the computer's guess and turns it into an array
	var holder = computerGuess.split("");
//shoows the computer's guess on the console
	console.log(holder);
	console.log(    )
console.log("Welcome to Node.js Hangman!")
console.log("--------------------------------");

prompt.start();

game = {
 	computerGuess: computerGuess,
 	gamesLeft: 10,
 	Word: null,
 	
 	startGame: function (wrd) {
 		this.Word = new word(computerGuess);
 		console.log("computer guessed: " + computerGuess);
 		this.Word.getter();
 		this.promptUser();
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(["Guess a letter"], function(err, result){
 			console.log("You guessed: " + result.userGuessed);
 			var guessChecker = self.Word.checking(result.userGuessed);

 			if(guessChecker == 0) {
 				console.log("WRONG");
 				self.gamesLeft--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.Word.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.gamesLeft);
 			console.log("-------------------");
 			if((self.gamesLeft > 0) && (self.Word.found == false)){
 				self.promptUser();
 			}
 			else if(self.gamesLeft ==0){
 				console.log("Game over. Correct Word ", self.Word.pointer);
 			} else {
 				console.log(self.Word.display());
 			}
 		});

 	}


};

game.startGame();