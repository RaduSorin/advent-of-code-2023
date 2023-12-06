const fs = require('fs');
let sum = 0;

function returnNumbersArray(str) {
    return str.match(/\d+/g)
}

const allFileContents = fs.readFileSync('./day4/puzzle4_1.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {

    var numbers = line.split('|')
    var numbersAndCard = numbers[0].split(':')
    var winningNumbers = returnNumbersArray(numbersAndCard[1]);
    var owenedNumbers = returnNumbersArray(numbers[1]);
    var commonElements = 0;

    for(let i = 0; i < Object.keys(owenedNumbers).length; i++){
        if(Object.values(winningNumbers).includes(owenedNumbers[i])){
            commonElements++
        }
    }
    var score = 0;
    if(commonElements > 0){
        for(let x = 1; x <= commonElements; x++){
            if(x === 1){
                score = 1;
            }else{
                score = score * 2
            }
        }
    }
    sum += score
});
console.log(sum)