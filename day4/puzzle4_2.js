const fs = require('fs');
let sum = 0;
let document = [];

function returnNumbersArray(str) {
    return str.match(/\d+/g)
}

const allFileContents = fs.readFileSync('./day4/puzzle4_2.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    document.push(line);
});

var multiplier = Array(document.length).fill(1)

const loop = (times, callback) => {
    for (let i = 0; i < times; i++) {
        callback(i);
    }
};

for (let card = 0; card < document.length; card++) {
    var numbers = document[card].split('|')
    var numbersAndCard = numbers[0].split(':')
    var winningNumbers = returnNumbersArray(numbersAndCard[1]);
    var owenedNumbers = returnNumbersArray(numbers[1]);
    var commonElements = 0;

    for (let i = 0; i < Object.keys(owenedNumbers).length; i++) {
        if (Object.values(winningNumbers).includes(owenedNumbers[i])) {
            commonElements++
        }
    }

    for (let x = 1; x <= commonElements; x++) {
        loop(multiplier[card], i => {
            multiplier[card + x]++;
            console.log(commonElements)
            console.log(`Iteration is #${i}`);
            console.log(multiplier)
        })
    }
}

multiplier.forEach(item => {
    sum += item;
});

console.log(sum)