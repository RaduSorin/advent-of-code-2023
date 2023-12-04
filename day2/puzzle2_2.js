const fs = require('fs');
let sum = 0;

function returnStrNumber(str) {
    var num = str.replace(/[^0-9]/g, '');
    return parseInt(num, 10);
}

const allFileContents = fs.readFileSync('./day2/puzzle2_2.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    var n = line.split(';')
    var m = n[0].split(':')
    var gamesScores = n.slice(1);
    var red = 0;
    var blue = 0;
    var green = 0;

    gamesScores.splice(0, 0, m[1])
    gamesScores.forEach((games) => {
        games.split(',').forEach((score) => {
            if (score.includes('red') && returnStrNumber(score) > red) {
                red = returnStrNumber(score);
            }
            if (score.includes('blue') && returnStrNumber(score) > blue) {
                blue = returnStrNumber(score);
            }
            if (score.includes('green') && returnStrNumber(score) > green) {
                green = returnStrNumber(score);
            }
        })
    })
    sum += red * green * blue;
});
console.log(sum)