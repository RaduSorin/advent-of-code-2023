const fs = require('fs');
let sum = 0;

function returnStrNumber(str) {
    var num = str.replace(/[^0-9]/g, '');
    return parseInt(num, 10);
}

const allFileContents = fs.readFileSync('./day2/puzzle2_1.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    var n = line.split(';')
    var m = n[0].split(':')
    var gamesScores = n.slice(1);
    var gameString = m[0]

    gamesScores.splice(0, 0, m[1])

    var bool = true;
    gamesScores.forEach((games)=>{
        games.split(',').forEach((score)=>{
            if(score.includes('red') && returnStrNumber(score) > 12 || score.includes('green') && returnStrNumber(score) > 13 || score.includes('blue') && returnStrNumber(score) > 14 ){
                console.log('Game #' + returnStrNumber(gameString) + ' does not have enaugh cubes')
                bool = false;
            }
        })
    })

    if(bool){
        sum += returnStrNumber(gameString);
    }

});
console.log(sum)