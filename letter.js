/*
This will check to see if the letter userGuess is
within the computerGuess. 
And if it is it will give us back the location 
as well as replace the "_" with the correct letter
*/

var check = function (guess) {
	this.charc = guess;
	this.appear = false;
	this.letterPlacer = function() {
		return !(this.appear) ? "_" : this.charc;
	};
};

module.exports = check;