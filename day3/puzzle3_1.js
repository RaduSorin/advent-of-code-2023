const fs = require('fs');
let sum = 0;
let document = [];

function returnStrNumber(str) {
    var num = str.replace(/[^0-9]/g, '');
    return parseInt(num, 10);
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

    if (line === 0) {
        previosLine = "";
        middleLine = document[line];
        nextLine = document[line + 1];
        // console.log('p ' + previosLine)
        // console.log('m ' + middleLine)
        // console.log('n ' + nextLine)
        console.log('first ' + line)
        // continue;
    }
    else if (line === document.length - 1) {
        previosLine = document[line - 1];
        middleLine = document[line];
        nextLine = "";
        // console.log('p ' + previosLine)
        console.log('last ' + line)
        // console.log('m ' + middleLine)
        // console.log('n ' + nextLine)
        // continue;
    } else {
        previosLine = document[line - 1];
        middleLine = document[line];
        nextLine = document[line + 1];
        console.log('else ' + line)
        // console.log('p ' + previosLine)
        // console.log('m ' + middleLine)
        // console.log('n ' + nextLine)
    }
    console.log('p ' + previosLine)
    console.log('m ' + middleLine)
    console.log('n ' + nextLine)

    // for (let char = 0; char < middleLine.length; char++) {
    //     var symbol = false;
    //     console.log(document[line-1][char])
    //     if (isNumber(middleLine[char])) {
    //         console.log(middleLine[char])
    //         if(previosLine[char - 1] !== '.' && !isNumber(previosLine[char - 1]) || 
    //             previosLine[char] !== '.' && !isNumber(previosLine[char]) || 
    //             previosLine[char + 1] !== '.' && !isNumber(previosLine[char + 1]) ||
    //             middleLine[char - 1] !== '.' && !isNumber(middleLine[char - 1]) ||
    //             middleLine[char + 1] !== '.' && !isNumber(middleLine[char + 1]) ||
    //             nextLine[char - 1] !== '.' && !isNumber(nextLine[char - 1]) ||
    //             nextLine[char] !== '.' && !isNumber(nextLine[char]) ||
    //             nextLine[char + 1] !== '.' && !isNumber(nextLine[char + 1])
    //             ){
    //                 console.log('char symbol ' + middleLine[char])
    //                 symbol = true; 
    //             }
    //     }
    // }
    // console.log('p ' + previosLine)
    // console.log('m ' + middleLine)
    // console.log('n ' + nextLine)
}
// function getElementColumn(columnIndex) {
//     let elementColumn = [];
//     document.forEach((line) => {
//         elementColumn.push(line[columnIndex])
//     })
//     return elementColumn;
// }

// function getElementLine(lineIndex) {
//     var elementLine = [];
//     var elements = Array.from(document[lineIndex]);
//     elements.forEach((element) => {
//         elementLine = elementLine.concat(element);
//         // elementLine.push(element)
//     })
//     return elementLine;
// }
// console.log(allFileContents)
// var line = getElementLine(0);
// console.log(line)