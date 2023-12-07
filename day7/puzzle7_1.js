const fs = require('fs');
let sum = 0;
function returnNumbersArray(str) {
    return str.match(/\d+/g)
}

// Array.prototype.move = function (from, to) {
//     this.splice(to, 0, this.splice(from, 1)[0]);
// };

// var ar = [1, 2, 3, 4, 5];
// ar.move(0, 3);
// alert(ar) // 2,3,4,1,5
mapCards = { 'T': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 }

var handsCard = []
var bids = []

const allFileContents = fs.readFileSync('./day7/puzzle7_1.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    handsCard.push(line.split(' ')[0]);
    bids.push(line.split(' ')[1])
});

replacedHandCards = [];

handsCard.forEach((hand) => {
    // console.log(hand)
    var cards = hand.split('')
    for (let i = 0; i < Object.values(cards).length; i++) {
        if (Object.keys(mapCards).includes(cards[i])) {
            cards[i] = mapCards[cards[i]]
        } else {
            cards[i] = +cards[i]
        }
    }
    replacedHandCards.push(cards)
})

for(let i = 0; i < Object.values(replacedHandCards).length; i++){
    const counts = {};
    replacedHandCards[i].forEach((card) => {
      counts[card] = (counts[card] || 0) + 1;
    });
}


console.log(replacedHandCards)