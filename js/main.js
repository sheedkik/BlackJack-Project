let turn = {
    "1": "Player",
    "-1": "Dealer",
    "0" : ""
}

const suits = ["s", "c", "d", "h"]
const ranks = ["02", "03", "04", "05", "06", "07", "08", "09", "10", "J", "Q", "K", "A"]
const unshuffledDeck = createDeck();

const imageLinks = {
    "s02": "/css/card-deck-css/images/spades/spades-r02.svg",
    "s03": "/css/card-deck-css/images/spades/spades-r03.svg",
    "s04": "/css/card-deck-css/images/spades/spades-r04.svg",
    "s05": "/css/card-deck-css/images/spades/spades-r05.svg",
    "s06": "/css/card-deck-css/images/spades/spades-r06.svg",
    "s07": "/css/card-deck-css/images/spades/spades-r07.svg",
    "s08": "/css/card-deck-css/images/spades/spades-r08.svg",
    "s09": "/css/card-deck-css/images/spades/spades-r09.svg",
    "s10": "/css/card-deck-css/images/spades/spades-r10.svg",
    "sJ": "/css/card-deck-css/images/spades/spades-J.svg",
    "sQ": "/css/card-deck-css/images/spades/spades-Q.svg",
    "sK": "/css/card-deck-css/images/spades/spades-K.svg",
    "sA": "/css/card-deck-css/images/spades/spades-A.svg",
    "d02": "/css/card-deck-css/images/diamonds/diamonds-r02.svg",
    "d03": "/css/card-deck-css/images/diamonds/diamonds-r03.svg",
    "d04": "/css/card-deck-css/images/diamonds/diamonds-r04.svg",
    "d05": "/css/card-deck-css/images/diamonds/diamonds-r05.svg",
    "d06": "/css/card-deck-css/images/diamonds/diamonds-r06.svg",
    "d07": "/css/card-deck-css/images/diamonds/diamonds-r07.svg",
    "d08": "/css/card-deck-css/images/diamonds/diamonds-r08.svg",
    "d09": "/css/card-deck-css/images/diamonds/diamonds-r09.svg",
    "d10": "/css/card-deck-css/images/diamonds/diamonds-r10.svg",
    "dJ": "/css/card-deck-css/images/diamonds/diamonds-J.svg",
    "dQ": "/css/card-deck-css/images/diamonds/diamonds-Q.svg",
    "dK": "/css/card-deck-css/images/diamonds/diamonds-K.svg",
    "dA": "/css/card-deck-css/images/diamonds/diamonds-A.svg",
    "c02": "/css/card-deck-css/images/clubs/clubs-r02.svg",
    "c03": "/css/card-deck-css/images/clubs/clubs-r03.svg",
    "c04": "/css/card-deck-css/images/clubs/clubs-r04.svg",
    "c05": "/css/card-deck-css/images/clubs/clubs-r05.svg",
    "c06": "/css/card-deck-css/images/clubs/clubs-r06.svg",
    "c07": "/css/card-deck-css/images/clubs/clubs-r07.svg",
    "c08": "/css/card-deck-css/images/clubs/clubs-r08.svg",
    "c09": "/css/card-deck-css/images/clubs/clubs-r09.svg",
    "c10": "/css/card-deck-css/images/clubs/clubs-r10.svg",
    "cJ": "/css/card-deck-css/images/clubs/clubs-J.svg",
    "cQ": "/css/card-deck-css/images/clubs/clubs-Q.svg",
    "cK": "/css/card-deck-css/images/clubs/clubs-K.svg",
    "cA": "/css/card-deck-css/images/clubs/clubs-Aa.svg",
    "h02": "/css/card-deck-css/images/hearts/hearts-r02.svg",
    "h03": "/css/card-deck-css/images/hearts/hearts-r03.svg",
    "h04": "/css/card-deck-css/images/hearts/hearts-r04.svg",
    "h05": "/css/card-deck-css/images/hearts/hearts-r05.svg",
    "h06": "/css/card-deck-css/images/hearts/hearts-r06.svg",
    "h07": "/css/card-deck-css/images/hearts/hearts-r07.svg",
    "h08": "/css/card-deck-css/images/hearts/hearts-r08.svg",
    "h09": "/css/card-deck-css/images/hearts/hearts-r09.svg",
    "h10": "/css/card-deck-css/images/hearts/hearts-r10.svg",
    "hJ": "/css/card-deck-css/images/hearts/hearts-J.svg",
    "hQ": "/css/card-deck-css/images/hearts/hearts-Q.svg",
    "hK": "/css/card-deck-css/images/hearts/hearts-K.svg",
    "hA": "/css/card-deck-css/images/hearts/hearts-A.svg"
}



let playerHand, dealerHand, winner, playerBlackjack, dealerBlackjack, dealerHiddenCard


let shuffledDeck = shuffleDeck();

let playerTotal
let dealerTotal 
let playerCards = [];
let dealerCards = [];

const dealerCardsEle = document.querySelector(".dealer-cards");
const playerCardsEle = document.querySelector(".player-cards");
const winnerEle = document.querySelector(".winner");
const hitBtn = document.getElementById("hit-btn");
const standBtn = document.getElementById("stand-btn");
const splitBtn = document.getElementById("split-btn");
const doubleBtn = document.getElementById("double-btn");
const resetBtn = document.getElementById("reset-button");



hitBtn.addEventListener("click", function(event){
    event.preventDefault();

    if (turn === "1" && playerTotal < 22) {
        dealCards(playerCardsEle);
        
        if (playerTotal > 21) {
            winner = "-1";
        } else {
            turn = "1";
        }
        render();
    }
})


standBtn.addEventListener("click", function(event){
    turn = "-1"
    event.preventDefault();

        while (dealerTotal < 17) {
            dealCards(dealerCardsEle);
        }
        if (dealerTotal > 21) {
            winner = "1";
        } else {
            calculateWinner();
        }
        render();
})

resetBtn.addEventListener("click", function() {
    reset();
    init();
})


function createDeck () {
    const deck = [];
    suits.forEach(function(suit){
        ranks.forEach(function(rank){
            let value;
            if (rank ==="A") {
                value = 11;
            } else if (rank === "J" || rank === "Q" || rank === "K") {
                value = 10;
            } else {
                value = Number(rank);
            }
            deck.push({
                face: `${suit}${rank}`,
                value: value
            });
        });
    });
    return deck;
}

function shuffleDeck () {
    const tempDeck = [...unshuffledDeck];
    const newShuffledDeck = [];
    while (tempDeck.length) {
        const rndIdx = Math.floor(Math.random() * tempDeck.length);
        newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    return newShuffledDeck;
}


function calculateWinner () {
    while (winner === null) {
        if (dealerTotal < 22) {
            if (dealerTotal === playerTotal) {
                winner = "T";
            } else if (dealerTotal > playerTotal) {
                winner = "-1";
            } else {
                winner = "1";
            }
        }
    }
}

function calculateTotal (hand) {
    let total = 0
    let aces = 0;
    
    hand.forEach(function (card) {
        total += card.value;
        if (card.value === 11) {
            aces += 1;
        }
    })
    
    while (aces > 0 && total > 21) {
        total -= 10;
        aces -= 1;
    }
    return total;
}

function checkBlackjack () {
    if (playerCards[0].value === "10" || playerCards[0].value === "J" || playerCards[0].value === "Q" || playerCards[0].value === "K"  && playerCards[1].value === "A") {
        playerBlackjack = true;
    } else if (playerCards[0].value === "A"  && playerCards[1].value === "10" || playerCards[1].value === "J" || playerCards[1].value === "Q" || playerCards[1].value === "K") {
        playerBlackjack = true;
    }

    if (dealerCards[0].value === "10" || dealerCards[0].value === "J" || dealerCards[0].value === "Q" || dealerCards[0].value === "K" && dealerCards[1].value ==="A") {
        dealerBlackjack = true;
    } else if (dealerCards[0] === "A" && dealerCards[1].value === "10" || dealerCards[1].value === "J" || dealerCards[1].value === "Q" || dealerCards[1].value === "K" ) {
        dealerBlackjack = true;
    }

    if (playerBlackjack) {
        if (dealerBlackjack = true) {
             winner = "T" 
        } else if (dealerBlackjack = false) {
            winner = 1;
        } else {
            winner = null;
            console.log("no blackjacks")
        }
    }
}

function render () {
renderWinner();
}


function renderWinner () {

    if ( winner === "1") {
        winnerEle.innerText = "You win!" 
    } else if  (winner === "-1") {
        winnerEle.innerText = "Dealer Wins..." 
    } else if ( winner === "T") {
        winnerEle.innerText = "Its a push." 
    } else if ( winner === null) {
        winnerEle.innerText = "Game is in progress..."
    }


}


function dealCards(handEle, isFaceDown = false) {
    const card = shuffledDeck.shift();
    const cardEle = document.createElement("div");

    if (isFaceDown) {
        cardEle.innerHTML = `${card.back}`;
    } else {
        cardEle.innerHTML = `<img src="${imageLinks[card.face]}" alt="${card.face}">`;
    }

    handEle.appendChild(cardEle);

    if (handEle === playerCardsEle) {
        playerCards.push(card);
        playerTotal = calculateTotal(playerCards);
    } else if (handEle === dealerCardsEle) {
        dealerCards.push(card);
        dealerTotal = calculateTotal(dealerCards);
    }
}


function init() {
    winner = null;
    createDeck();
    shuffleDeck();
    dealCards(playerCardsEle);
    dealCards(dealerCardsEle);
    dealCards(playerCardsEle);
    dealCards(dealerCardsEle);
    render();
    turn = "1";
}

function reset() {
    createDeck();
    shuffleDeck();
    dealerTotal = 0;
    playerTotal = 0;
    turn = "1";
    winner = null;
    dealerCards = [];
    playerCards = [];
    dealerCardsEle.innerHTML = "";
    playerCardsEle.innerHTML = "";
    render();

}



init();
