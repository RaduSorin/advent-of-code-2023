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

const allFileContents = fs.readFileSync('./day3/puzzle3_2.txt', 'utf-8');
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

    var starIndex = [];
    var numbersMiddle = {};
    var numbersPrevios = {};
    var numberNext = {};
    var previosStarIndex = 0;
    var previosNumberIndex = 0;
    var previosNextLineNumberIndex = 0;
    var previosLineNumerIndex = 0;

    if (middleLine.includes('*')) {
        for (let char = 0; char <= middleLine.length - 1; char++) {
            if (middleLine[char] === '*') {
                starIndex.push(middleLine.indexOf('*', previosStarIndex))
                previosStarIndex = middleLine.indexOf('*', previosStarIndex) + 1;
            }

        }
    }

    if (returnNumbersArray(middleLine) != null) {
        returnNumbersArray(middleLine).forEach((number) => {
            var numberStartingIndex = middleLine.indexOf(number, previosIndex)
            var numberEndingIndex = middleLine.indexOf(number, numberStartingIndex) + number.length - 1

            numbersMiddle[number] = [numberStartingIndex, numberEndingIndex]
            previosIndex = numberEndingIndex;
        })
    }

    if (returnNumbersArray(nextLine) != null) {
        returnNumbersArray(nextLine).forEach((number) => {
            var numberStartingIndex = nextLine.indexOf(number, previosNextLineNumberIndex)
            var numberEndingIndex = nextLine.indexOf(number, numberStartingIndex) + number.length - 1

            numberNext[number] = [numberStartingIndex, numberEndingIndex]
            previosNextLineNumberIndex = numberEndingIndex;
        })
    }

    if (returnNumbersArray(previosLine) != null) {
        returnNumbersArray(previosLine).forEach((number) => {
            var numberStartingIndex = previosLine.indexOf(number, previosLineNumerIndex)
            var numberEndingIndex = previosLine.indexOf(number, numberStartingIndex) + number.length - 1

            numbersPrevios[number] = [numberStartingIndex, numberEndingIndex]
            previosLineNumerIndex = numberEndingIndex;
        })
    }

    var numbersStarAdiacent = [];

    if (starIndex.length != 0) {
        starIndex.forEach((index) => {
            if (numbersPrevios.length != 0) {
                Object.keys(numbersPrevios).forEach((key) => {
                    if (numbersPrevios[key][0] != 0 && numbersPrevios[key][1] != previosLine.length - 1 && index >= numbersPrevios[key][0] - 1 && index <= numbersPrevios[key][1] + 1) {
                        console.log(key + 'from if')
                        numbersStarAdiacent.push(+key)
                    }
                    else if (numbersPrevios[key][0] === 0 && index <= numbersPrevios[key][1] + 1) {
                        console.log(key + 'from else if')
                        numbersStarAdiacent.push(+key)
                    }
                    else if (numbersPrevios[key][1] === previosLine.length - 1 && index >= numbersPrevios[key][0] - 1) {
                        console.log(key + 'from else if end line')
                        numbersStarAdiacent.push(+key)
                    }
                })
            }

            if (numbersMiddle.length != 0) {
                Object.keys(numbersMiddle).forEach((key) => {
                    if (numbersMiddle[key][0] != 0 && numbersMiddle[key][1] != middleLine.length - 1 && index >= numbersMiddle[key][0] - 1 && index <= numbersMiddle[key][1] + 1) {
                        console.log(key + 'from if')
                        numbersStarAdiacent.push(+key)
                    }
                    else if (numbersMiddle[key][0] === 0 && index <= numbersMiddle[key][1] + 1) {
                        console.log(key + 'from else if')
                        numbersStarAdiacent.push(+key)
                    }
                    else if (numbersMiddle[key][1] === middleLine.length - 1 && index >= numbersMiddle[key][0] - 1) {
                        console.log(key + 'from else if end line')
                        numbersStarAdiacent.push(+key)
                    }
                })
            }

            if (numberNext.length != 0) {
                Object.keys(numberNext).forEach((key) => {
                    if (numberNext[key][0] != 0 && numberNext[key][1] != nextLine.length - 1 && index >= numberNext[key][0] - 1 && index <= numberNext[key][1] + 1) {
                        console.log(key + 'from if')
                        numbersStarAdiacent.push(+key)
                    }
                    else if (numberNext[key][0] === 0 && index <= numberNext[key][1] + 1) {
                        console.log(key + 'from else if')
                        numbersStarAdiacent.push(+key)
                    }
                    else if (numberNext[key][1] === nextLine.length - 1 && index >= numberNext[key][0] - 1) {
                        console.log(key + 'from else if end line')
                        numbersStarAdiacent.push(+key)
                    }
                })
            }

            if (numbersStarAdiacent.length === 2) {
                // console.log(typeof(numbersStarAdiacent[0]))
                // console.log(numbersStarAdiacent[1])
                // console.log("str " + numbersStarAdiacent[0] * numbersStarAdiacent[1])
                // console.log("int "+ +numbersStarAdiacent[0] * +numbersStarAdiacent[1])
                sum += numbersStarAdiacent[0] * numbersStarAdiacent[1];
            }
            console.log(numbersStarAdiacent)
            numbersStarAdiacent = []
        })
    }

    // console.log(line)
    // console.log(middleLine)
    // console.log(numbersPrevios)
    // console.log(numbersMiddle)
    // console.log(starIndex)
    // console.log(numberNext)
    previosStarIndex = 0;
    previosNumberIndex = 0;
    previosLineNumerIndex = 0;
    previosNextLineNumberIndex = 0;
}
console.log(sum)