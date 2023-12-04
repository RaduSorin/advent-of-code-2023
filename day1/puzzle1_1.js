const fs = require('fs');
let calibrationValues = [];
let sum = 0;

const allFileContents = fs.readFileSync('./day1/puzzle1.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {

    let numbers = line.replace(/[^0-9]/g, "");
    let calibration = [];

    if (numbers.length == 1){
        calibration = Array(2).fill(numbers)
        calibrationValues.push(calibration.join(''));
    }else{
        calibration.push(numbers.slice(0, 1), numbers.slice(-1));
        calibrationValues.push(calibration.join(''));
    }
});

calibrationValues.forEach(item => {
    sum += +item;
});
console.log(sum)