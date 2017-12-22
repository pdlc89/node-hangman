var letter = require("./letter.js");

function charac(pointer) {
	this.pointer = pointer;
	this.letterArr = [];
	this.inWord = false;

	this.getter = function() {
		for (var i=0; i < this.pointer.length; i++) {
			this.letterArr.push( new check(this.pointer[i]));
		}
	};

	this.findWord = function() {
		this.inWord = this.letterArr.every(function(correct) {
			return correct.appear;
		});
		return this.inWord;
	};

	this.checking = function  (userGussed) {
		var tally = 0;

		for (var i = 0; i < this.letterArr.length; i++) {
			if (this.letterArr[i].charc == userGussed){
				this.letterArr[i].appear = true;
				tally++;
			}
		}
		return tally;
	};

	this.display = function() {
		var word = '';
		for (var i=0; i < this.letterArr.length; i++){
			word += this.letterArr[i].letterPlacer();
		}
		return word;
	};

}

module.exports = charac;
