var CompareNumber = require('../main/compare_number.js');

describe('CompareNumber',function() {
    describe("judgeNumber",function() {
        var compare_number = new CompareNumber();

        it('judge four number position and correct', function() {
            var input = "1234";
            var randomNumber = "5467";
            expect(compare_number.judgeInputNumber(input,randomNumber)).toEqual("0A1B");
        });

        it('judge four number position and correct', function() {
            var input = "1234";
            var randomNumber = "4321";
            expect(compare_number.judgeInputNumber(input,randomNumber)).toEqual("0A4B");
        });

        it('judge four number position and correct', function() {
            var input = "6789";
            var randomNumber = "3721";
            expect(compare_number.judgeInputNumber(input,randomNumber)).toEqual("1A0B");
        });

        it('judge four number position and correct', function() {
            var input = "4567";
            var randomNumber = "4567";
            expect(compare_number.judgeInputNumber(input,randomNumber)).toEqual("4A0B");
        });
    });
})
