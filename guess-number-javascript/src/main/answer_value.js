function AnswerGenerator() {
    this.fourNumber = "";
}

AnswerGenerator.prototype.generater = function(){
    while(this.fourNumber.length < 4) {
        var temp = Math.floor(Math.random() * 10);
        var include = this.fourNumber.indexOf(temp);

        if (include === -1) {
            this.fourNumber += temp;
        }
    }
}

module.exports = AnswerGenerator;
