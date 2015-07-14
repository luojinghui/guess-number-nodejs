var Guess = require("../main/guess.js");
var AnswerGenerator = require("../main/answer_generator.js");
var CompareNumber = require("../main/compare_number.js");

describe("Guess",function() {
    describe("give one testNumber return answer",function() {
        var randomNumber;
        var testNumber;
        var answer;

        beforeEach(function() {
            spyOn(Math, "random").and.callFake(function() {
                console.log(randomNumber + "----------");
                return randomNumber;

            });
        })

        it('judge testNumber and answer is same', function() {
            randomNumber = "1234";

            var guess = new Guess();
            var result = guess.play("1234");

            expect(result).toEqual("4A0B");
        });
    })
})
