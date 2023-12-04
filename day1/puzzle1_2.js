const fs = require('fs');

var numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let sum = 0;

const allFileContents = fs.readFileSync('./day1/puzzle2.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    
    var numbersArray = [];
    const reg = "(?=(" + numbers.join("|") + "|\\d))";
    let results = line.matchAll(reg);

    for (result of results) {
        if (numbers.includes(result[1])) {
            var numberFromWord = numbers.indexOf(result[1]) + 1;
            numbersArray.push(numberFromWord)
            continue;
        }

        numbersArray.push(+result[1])
    }

    sum += +(numbersArray[0] + '' + numbersArray[numbersArray.length - 1]);

});

console.log(sum)