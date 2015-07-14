var AnswerGenerator = require("./answer_generator.js");
var CompareNumber = require("./compare_number.js");

function Guess() {

}

Guess.prototype.play = function(testNumber) {
    var answer_generator = new AnswerGenerator();
    var randomNumber = answer_generator.generater();
    var compare_number = new CompareNumber();

    return compare_number.judgeInputNumber(testNumber,randomNumber);
}

module.exports = Guess;
