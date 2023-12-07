const fs = require('fs');
let sum = 0;
let document = [];

function returnNumbersArray(str) {
    if (str === undefined) {
        return;
    }
    return str.match(/\d+/g)
}

function isNumber(char) {
    return /^\d$/.test(char);
}

const allFileContents = fs.readFileSync('./day3/puzzle3_1.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    document.push(line);
});

for (let line = 0; line < document.length; line++) {

    let previosLine;
    let middleLine;
    let nextLine;
    let lineNumbers = returnNumbersArray(document[line])
    var previosIndex = 0;
    previosLine = document[line - 1];
    middleLine = document[line];
    nextLine = document[line + 1];

    if (returnNumbersArray(document[line]) != null) {
        lineNumbers.forEach((number) => {
            var numberStartingIndex = document[line].indexOf(number, previosIndex)
            var numberEndingIndex = document[line].indexOf(number, numberStartingIndex) + number.length - 1
            previosIndex = numberEndingIndex;
            var symbol = false;

            for (let char = numberStartingIndex; char <= numberEndingIndex; char++) {
                if (line === 0 && char === 0) {
                    if (
                        middleLine[char + 1] !== '.' && !isNumber(middleLine[char + 1]) ||
                        nextLine[char] !== '.' && !isNumber(nextLine[char]) ||
                        nextLine[char + 1] !== '.' && !isNumber(nextLine[char + 1])
                    ) {
                        symbol = true;
                        continue;
                    }
                }
                else if (line === 0) {
                    if (
                        middleLine[char - 1] !== '.' && !isNumber(middleLine[char - 1]) ||
                        middleLine[char + 1] !== '.' && !isNumber(middleLine[char + 1]) ||
                        nextLine[char - 1] !== '.' && !isNumber(nextLine[char - 1]) ||
                        nextLine[char] !== '.' && !isNumber(nextLine[char]) ||
                        nextLine[char + 1] !== '.' && !isNumber(nextLine[char + 1])
                    ) {
                        symbol = true;
                        continue;
                    }
                }
                else if (line === 0 && char === middleLine.length - 1) {
                    if (
                        middleLine[char - 1] !== '.' && !isNumber(middleLine[char - 1]) ||
                        nextLine[char - 1] !== '.' && !isNumber(nextLine[char - 1]) ||
                        nextLine[char] !== '.' && !isNumber(nextLine[char])
                    ) {
                        symbol = true;
                        continue;
                    }
                }
                else if (line === document.length - 1 && char === 0) {
                    if (
                        previosLine[char] !== '.' && !isNumber(previosLine[char]) ||
                        previosLine[char + 1] !== '.' && !isNumber(previosLine[char + 1]) ||
                        middleLine[char + 1] !== '.' && !isNumber(middleLine[char + 1])
                    ) {
                        symbol = true;
                        continue;
                    }
                }
                else if (line === document.length - 1 && char === middleLine.length - 1) {
                    if (
                        previosLine[char - 1] !== '.' && !isNumber(previosLine[char - 1]) ||
                        previosLine[char] !== '.' && !isNumber(previosLine[char]) ||
                        middleLine[char - 1] !== '.' && !isNumber(middleLine[char - 1])
                    ) {
                        symbol = true;
                        continue;
                    }
                }
                else if (char === 0) {
                    if (
                        previosLine[char] !== '.' && !isNumber(previosLine[char]) ||
                        previosLine[char + 1] !== '.' && !isNumber(previosLine[char + 1]) ||
                        middleLine[char + 1] !== '.' && !isNumber(middleLine[char + 1]) ||
                        nextLine[char] !== '.' && !isNumber(nextLine[char]) ||
                        nextLine[char + 1] !== '.' && !isNumber(nextLine[char + 1])
                    ) {
                        symbol = true;
                        continue;
                    }
                }
                else if (char === middleLine.length - 1) {
                    if (
                        previosLine[char - 1] !== '.' && !isNumber(previosLine[char - 1]) ||
                        previosLine[char] !== '.' && !isNumber(previosLine[char]) ||
                        middleLine[char - 1] !== '.' && !isNumber(middleLine[char - 1]) ||
                        nextLine[char - 1] !== '.' && !isNumber(nextLine[char - 1]) ||
                        nextLine[char] !== '.' && !isNumber(nextLine[char])
                    ) {
                        symbol = true;
                        continue;
                    }
                }
                else if (line === document.length - 1) {
                    if (
                        previosLine[char - 1] !== '.' && !isNumber(previosLine[char - 1]) ||
                        previosLine[char] !== '.' && !isNumber(previosLine[char]) ||
                        previosLine[char + 1] !== '.' && !isNumber(previosLine[char + 1]) ||
                        middleLine[char - 1] !== '.' && !isNumber(middleLine[char - 1]) ||
                        middleLine[char + 1] !== '.' && !isNumber(middleLine[char + 1])
                    ) {
                        symbol = true;
                        continue;
                    }
                }
                else {
                    if (
                        previosLine[char - 1] !== '.' && !isNumber(previosLine[char - 1]) ||
                        previosLine[char] !== '.' && !isNumber(previosLine[char]) ||
                        previosLine[char + 1] !== '.' && !isNumber(previosLine[char + 1]) ||
                        middleLine[char - 1] !== '.' && !isNumber(middleLine[char - 1]) ||
                        middleLine[char + 1] !== '.' && !isNumber(middleLine[char + 1]) ||
                        nextLine[char - 1] !== '.' && !isNumber(nextLine[char - 1]) ||
                        nextLine[char] !== '.' && !isNumber(nextLine[char]) ||
                        nextLine[char + 1] !== '.' && !isNumber(nextLine[char + 1])
                    ) {
                        symbol = true;
                    }
                }
            }
            if (symbol) {
                sum += +number;
            }
        })
        previosIndex = 0;
    }
}
console.log(sum)