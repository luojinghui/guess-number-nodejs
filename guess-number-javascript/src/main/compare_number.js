function CompareNumber() {}

CompareNumber.prototype.judgeInputNumber = function(input,randomNumber) {
    var result = {a : 0 , b : 0}
    var exit = true;

    [].forEach.call(randomNumber,function(val,i) {
        if(input[i] === randomNumber[i]) {
            result.a ++;
            exit = false;
        }
        if (input.indexOf(val) > -1 && exit) {
            result.b ++;
        }
        exit = true;
    })

    return result.a + "A" + result.b + "B";
}

module.exports = CompareNumber;
