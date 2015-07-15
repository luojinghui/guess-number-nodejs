var CompareNumber = require('../main/compare_number.js');

describe('CompareNumber',function() {
    describe("#judgeNumber()",function() {
        var compare_number = new CompareNumber();

        it('judge four number position and correct', function() {
            var result = compare_number.judgeInputNumber("1234","5678")
            expect(result).toBe("0A0B");
        });

        it('judge four number position and correct', function() {
            var result = compare_number.judgeInputNumber("1234","4321")
            expect(result).toBe("0A4B");
        });

        it('judge four number position and correct', function() {
            var result = compare_number.judgeInputNumber("6789","6987")
            expect(result).toBe("2A2B");
        });

        it('judge four number position and correct', function() {
            var result = compare_number.judgeInputNumber("4567","4567")
            expect(result).toBe("4A0B");
        });
    });
})
