const fs = require('fs');

const allFileContents = fs.readFileSync('./puzzle1.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {

    console.log(line)

});