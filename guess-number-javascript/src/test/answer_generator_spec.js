var AnswerGenerator = require("../main/answer_generator.js");

describe("AnswerGenerator", function() {
    describe("generater", function() {
        var returnValue;
        var i;

        beforeEach(function() {
            spyOn(Math, "random").and.callFake(function() {
                return returnValue[i++];
            });
        })

        it("should return 4 random digit number", function() {
            i = 0;
            returnValue = [0.93423, 0.8234234, 0.74324135, 0.60674556];
            var answergenerator = new AnswerGenerator();
            answergenerator.generater();
            expect(answergenerator.fourNumber).toEqual('9876');
        })

        it("should return 4 random digit number", function() {
            i = 0;
            returnValue = [0.054323523, 0.1756834, 0.2324245, 0.3564336];
            var answergenerator = new AnswerGenerator();
            answergenerator.generater();
            expect(answergenerator.fourNumber).toEqual('0123');
        })

        it("should return 4 random digit number", function() {
            i = 0;
            returnValue = [0.54323523, 0.563433, 0.1756834, 0.2324245, 0.3564336];
            var answergenerator = new AnswerGenerator();
            answergenerator.generater();
            expect(answergenerator.fourNumber).toEqual('5123');
        })
    })
})
