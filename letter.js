/*
This will check to see if the letter userGuess is
within the computerGuess. 
And if it is it will give us back the location 
as well as replace the "_" with the correct letter
*/
var game = require("./game");


var check = function () {
	console.log(" World");
	console.log("Your value is: " + game.holder)
	var elm = game.holder;
	this.isWord = false;
	var test = "";
	this.getHolder = function () {
		var test = elm;
		console.log(" World");
		// for (var i = 0; i < elm.length; i++) {
		// 	var test = elm[i].indexOf(game.userGuess);
		// }
		console.log("your guess:" + test)
	}
}
module.exports = check;