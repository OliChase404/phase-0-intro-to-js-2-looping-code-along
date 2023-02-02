
// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
// }


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i ++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//     }
//     return gifts
// }

// wrapGifts(gifts)

const cards = []

function writeCards(array, event){
    for(let x = 0; x < array.length; x++){
        cards[x] = `Thank you, ${array[x]}, for the wonderful ${event} gift!`
    }
    return cards
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

console.log(cards)

function countDown (y){
    while (y + 1 > 0){
        y--
        console.log(y + 1)
    }
}

countDown(10)