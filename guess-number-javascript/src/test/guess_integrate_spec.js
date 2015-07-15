var Guess = require("../main/guess.js");

describe("#Guess()",function() {
    describe(".play()",function() {
        var i;
        var returnValue;

        beforeEach(function() {
            spyOn(Math, "random").and.callFake(function() {
                return returnValue[i++];

            });
        })

        it('guess_integrate_mock_Math.random_get_result', function() {
            i = 0;
            returnValue = [0.13423, 0.2234234, 0.34324135, 0.40674556];
            var guess = new Guess();
            var result = guess.play("1234");

            expect(result).toEqual("4A0B");
        });

        it('guess_integrate_mock_Math.random_get_result', function() {
            i = 0;
            returnValue = [0.13423, 0.2234234, 0.34324135, 0.40674556];
            var guess = new Guess();
            var result = guess.play("4321");

            expect(result).toEqual("0A4B");
        });
    })
})
