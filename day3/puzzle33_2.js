const fs = require('fs');
let sum = 0;
let document = [];

function returnNumbersArray(str) {
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
    var previosStarIndex = 0;

    if (middleLine.includes('*')) {
        for (let char = 0; char <= middleLine.length - 1; char++) {
            if (middleLine[char] === '*') {
                starIndex.push(middleLine.indexOf('*', previosStarIndex))
                previosStarIndex = middleLine.indexOf('*', previosStarIndex) + 1;
            }

        }
    }

    if (starIndex.length != 0) {
        starIndex.forEach((index) => {

            if (line === 0 && index === 0) {
                if (
                    middleLine[index + 1] === '*' ||
                    nextLine[index] === '*' ||
                    nextLine[index + 1] === '*'
                ) {
                    symbol = true;
                    //gearIndex.push()
                    //continue;
                }
            }



            if (returnNumbersArray(previosLine) != null) {
                lineNumbers.forEach((number) => {
                    console.log(number)
                })
            }


            if (returnNumbersArray(document[line]) != null) {
                lineNumbers.forEach((number) => {
        
                    var numberStartingIndex = document[line].indexOf(number, previosIndex)
                    var numberEndingIndex = document[line].indexOf(number, numberStartingIndex) + number.length - 1
                    previosIndex = numberEndingIndex;
                    var symbol = false;
        
                    for (let char = numberStartingIndex; char <= numberEndingIndex; char++) {
                        if (line === 0 && char === 0) {
                            console.log(number)
                        }
                        else if (line === 0) {
                            console.log(number)
                        }
                        else if (line === 0 && char === middleLine.length - 1) {
                            console.log(number)
                        }
                        else if (char === 0) {
                            console.log(number)
                        }
                        else if (char === middleLine.length - 1) {
                            console.log(number)
                        }
                        else if (line === document.length - 1 && char === 0) {
                            console.log(number)
                        }
                        else if (line === document.length - 1) {
                            console.log(number)
                        }
                        else if (line === document.length - 1 && char === middleLine.length - 1) {
                            console.log(number)
                        }
                        else {
                            console.log(number)
                        }
                    }
        
                            // if (symbol) {
                            //     console.log(number);
                            // }
                })
        
                previosIndex = 0;
                previosStarIndex = 0;
            }
        })
    }


    // console.log(starIndex)

    // if (returnNumbersArray(document[line]) != null) {
    //     lineNumbers.forEach((number) => {

    //         var numberStartingIndex = document[line].indexOf(number, previosIndex)
    //         var numberEndingIndex = document[line].indexOf(number, numberStartingIndex) + number.length - 1
    //         previosIndex = numberEndingIndex;
    //         var symbol = false;
    //         var gearIndex = [];

    //         for (let char = numberStartingIndex; char <= numberEndingIndex; char++) {
    //             if (line === 0 && char === 0) {
    //                 if (
    //                     middleLine[char + 1] === '*' ||
    //                     nextLine[char] === '*' ||
    //                     nextLine[char + 1] === '*'
    //                 ) {
    //                     symbol = true;
    //                     gearIndex.push()
    //                     continue;
    //                 }
    //             }
    //             else if (line === 0) {
    //                 if (
    //                     middleLine[char - 1] === '*' ||
    //                     middleLine[char + 1] === '*' ||
    //                     nextLine[char - 1] === '*' ||
    //                     nextLine[char] === '*' ||
    //                     nextLine[char + 1] === '*'
    //                 ) {
    //                     symbol = true;
    //                     continue;
    //                 }
    //             }
    //             else if (line === 0 && char === middleLine.length - 1) {
    //                 if (
    //                     middleLine[char - 1] === '*' ||
    //                     nextLine[char - 1] === '*' ||
    //                     nextLine[char] === '*'
    //                 ) {
    //                     symbol = true;
    //                     continue;
    //                 }
    //             }
    //             else if (char === 0) {
    //                 if (
    //                     previosLine[char] === '*' ||
    //                     previosLine[char + 1] === '*' ||
    //                     middleLine[char + 1] === '*' ||
    //                     nextLine[char] === '*' ||
    //                     nextLine[char + 1] === '*'
    //                 ) {
    //                     symbol = true;
    //                     continue;
    //                 }
    //             }
    //             else if (char === middleLine.length - 1) {
    //                 if (
    //                     previosLine[char - 1] === '*' ||
    //                     previosLine[char] === '*' ||
    //                     middleLine[char - 1] === '*' ||
    //                     nextLine[char - 1] === '*' ||
    //                     nextLine[char] === '*'
    //                 ) {
    //                     symbol = true;
    //                     continue;
    //                 }
    //             }
    //             else if (line === document.length - 1 && char === 0) {
    //                 if (
    //                     previosLine[char] === '*' ||
    //                     previosLine[char + 1] === '*' ||
    //                     middleLine[char + 1] === '*'
    //                 ) {
    //                     symbol = true;
    //                     continue;
    //                 }
    //             }
    //             else if (line === document.length - 1) {
    //                 if (
    //                     previosLine[char - 1] === '*' ||
    //                     previosLine[char] === '*' ||
    //                     previosLine[char + 1] === '*' ||
    //                     middleLine[char - 1] === '*' ||
    //                     middleLine[char + 1] === '*'
    //                 ) {
    //                     symbol = true;
    //                     continue;
    //                 }
    //             }
    //             else if (line === document.length - 1 && char === middleLine.length - 1) {
    //                 if (
    //                     previosLine[char - 1] === '*' ||
    //                     previosLine[char] === '*' ||
    //                     middleLine[char - 1] === '*'
    //                 ) {
    //                     symbol = true;
    //                     continue;
    //                 }
    //             }
    //             else {
    //                 if (
    //                     previosLine[char - 1] === '*' ||
    //                     previosLine[char] === '*' ||
    //                     previosLine[char + 1] === '*' ||
    //                     middleLine[char - 1] === '*' ||
    //                     middleLine[char + 1] === '*' ||
    //                     nextLine[char - 1] === '*' ||
    //                     nextLine[char] === '*' ||
    //                     nextLine[char + 1] === '*'
    //                 ) {
    //                     symbol = true;
    //                 }
    //             }
    //         }

    //         //         if (symbol) {
    //         //             console.log(number);
    //         //         }
    //     })

    //     previosIndex = 0;
    //     previosStarIndex = 0;
    // }
}
// console.log(sum)