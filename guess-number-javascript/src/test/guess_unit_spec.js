var Guess = require("../main/guess.js");
var AnswerGenerator = require("../main/answer_generator.js");
var CompareNumber = require("../main/compare_number.js");

describe("Guess",function() {
    describe("give one testNumber return answer",function() {
        var randomNumber;
        var testNumber;
        var answer;

        beforeEach(function() {
            spyOn(AnswerGenerator.prototype, "generater").and.callFake(function() {
                return randomNumber;
            });

            spyOn(CompareNumber.prototype, "judgeInputNumber").and.callFake(function(value,value2) {
                // console.log(testNumber,value,randomNumber,value2);
                if(value === testNumber && value2 === randomNumber) {
                    return answer;
                }
            });
        })

        it('judge testNumber and answer is same', function() {
            testNumber = "1234";
            randomNumber = "1234";
            answer = "4A0B"

            var guess = new Guess();
            var result = guess.play(testNumber);

            expect(result).toEqual("4A0B");
        });

        it('judge testNumber and answer is same', function() {
            testNumber = "1234";
            randomNumber = "4321";
            answer = "0A4B";

            var guess = new Guess();
            var result = guess.play(testNumber);

            expect(result).toEqual("0A4B");
        });

        it('judge testNumber and answer is same', function() {
            testNumber = "1234";
            randomNumber = "5678";
            answer = "0A0B";

            var guess = new Guess();
            var result = guess.play(testNumber);

            expect(result).toEqual("0A0B");
        });
    })
})
