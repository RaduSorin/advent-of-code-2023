const fs = require('fs');
let sum = 0;
var raceInput = [];
var document = [];
function returnNumbersArray(str) {
    return str.match(/\d+/g)
}

const allFileContents = fs.readFileSync('./day6/puzzle6_1.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    document.push(returnNumbersArray(line));
});

function raceParameters(columnIndex) {
    let column = [];
    document.forEach((line) => {
        column.push(parseInt(line[columnIndex]))
    })
    return column;
}

for (let i = 0; i < document[0].length; i++) {
    raceInput.push(raceParameters(i))
}

raceInput.forEach((race)=>{
    let raceTime = race[0];
    let raceDistance = race[1]
    let waysToFinishRace = 0;

    for(let i = 0; i <= raceTime; i++){
        var raceEnd = 0;
        raceEnd = (raceTime - i) * i;
        if(raceEnd > raceDistance){
            waysToFinishRace++;
        }
    }

    console.log('race time: ' + raceTime)
    console.log('race distance: ' + raceDistance)
    console.log('ways to finish race: ' + waysToFinishRace)

    if(sum === 0){
        sum += waysToFinishRace
    }else{
        sum = sum * waysToFinishRace
    }
})

console.log(sum)