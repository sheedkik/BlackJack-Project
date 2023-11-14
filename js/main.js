//------------------------------Constants-----------------------------------------------------//
const turn = {
    "1": "Player",
    "-1": "Dealer",
    "0" : ""
}

const suits = ["s", "c", "d", "h"]
const ranks = ["02", "03", "04", "05", "06", "07", "08", "09", "10", "J", "Q", "K", "A"]
const unshuffledDeck = createDeck();

const imageLinks = {
    "s02": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/spades/spades-r02.svg",
    "s03": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/spades/spades-r03.svg",
    "s04": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/spades/spades-r04.svg",
    "s05": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/spades/spades-r05.svg",
    "s06": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/spades/spades-r06.svg",
    "s07": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/spades/spades-r07.svg",
    "s08": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/spades/spades-r08.svg",
    "s09": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/spades/spades-r09.svg",
    "s10": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/spades/spades-r10.svg",
    "sJ": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/spades/spades-J.svg",
    "sQ": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/spades/spades-Q.svg",
    "sK": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/spades/spades-K.svg",
    "sA": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/spades/spades-A.svg",
    "d02": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/diamonds/diamonds-r02.svg",
    "d03": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/diamonds/diamonds-r03.svg",
    "d04": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/diamonds/diamonds-r04.svg",
    "d05": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/diamonds/diamonds-r05.svg",
    "d06": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/diamonds/diamonds-r06.svg",
    "d07": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/diamonds/diamonds-r07.svg",
    "d08": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/diamonds/diamonds-r08.svg",
    "d09": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/diamonds/diamonds-r09.svg",
    "d10": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/diamonds/diamonds-r10.svg",
    "dJ": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/diamonds/diamonds-J.svg",
    "dQ": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/diamonds/diamonds-Q.svg",
    "dK": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/diamonds/diamonds-K.svg",
    "dA": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/diamonds/diamonds-A.svg",
    "c02": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/clubs/clubs-r02.svg",
    "c03": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/clubs/clubs-r03.svg",
    "c04": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/clubs/clubs-r04.svg",
    "c05": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/clubs/clubs-r05.svg",
    "c06": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/clubs/clubs-r06.svg",
    "c07": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/clubs/clubs-r07.svg",
    "c08": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/clubs/clubs-r08.svg",
    "c09": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/clubs/clubs-r09.svg",
    "c10": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/clubs/clubs-r10.svg",
    "cJ": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/clubs/clubs-J.svg",
    "cQ": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/clubs/clubs-Q.svg",
    "cK": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/clubs/clubs-K.svg",
    "cA": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/clubs/clubs-A.svg",
    "h02": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/hearts/hearts-r02.svg",
    "h03": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/hearts/hearts-r03.svg",
    "h04": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/hearts/hearts-r04.svg",
    "h05": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/hearts/hearts-r05.svg",
    "h06": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/hearts/hearts-r06.svg",
    "h07": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/hearts/hearts-r07.svg",
    "h08": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/hearts/hearts-r08.svg",
    "h09": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/hearts/hearts-r09.svg",
    "h10": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/hearts/hearts-r10.svg",
    "hJ": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/hearts/hearts-J.svg",
    "hQ": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/hearts/hearts-Q.svg",
    "hK": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/hearts/hearts-K.svg",
    "hA": "/home/manucharyand/BlackJack-Project/css/card-deck-css/images/hearts/hearts-A.svg"
}



//------------------------------State Variables-----------------------------------------------//
let playerHand, dealerHand, winner, playerBlackjack, dealerBlackjack, playerTotal, dealerTotal

let shuffledDeck = shuffleDeck();


//------------------------------Cached Elements-----------------------------------------------//
const dealerCard1Ele = document.querySelector(".dealer-card1");
const dealerCard2Ele = document.querySelector(".dealer-card2");
const dealerCardsEle = document.querySelector(".dealer-cards");
const playerCard1Ele = document.querySelector(".player-card1");
const playerCard2Ele = document.querySelector(".player-card2");
const playerCardsEle = document.querySelector(".player-cards");
const headerEle = document.querySelector(".header");
const hitEle = document.getElementById("hit-btn");
const standEle = document.getElementById("stand-btn");
const splitEle = document.getElementById("split-btn");
const doubleEle = document.getElementById("double-btn");




//------------------------------Event Listeners-----------------------------------------------//
hitEle.addEventListener("click", function(){
    const newPlayerCard = playerCardsEle.appendChild(document.createElement("div"))
    newPlayerCard.innerHTML = shuffleDeck[4];
    playerTotal = playerTotal + newPlayerCard.value
    if (playerTotal > 21) {
        winner = "-1";
    } else {
        turn = "1";
    }
})

standEle.addEventListener("click", function(){
    turn = "-1";
})



//------------------------------Functions-----------------------------------------------------//
//Creates an unshuffled deck. Sets the value of each card to their number value, unless its an Ace, jack, queen, or king.
function createDeck () {
    const deck = [];
    suits.forEach(function(suit){
        ranks.forEach(function(rank){
            let value;
            if (rank ==="A") {
                value = 11;
            } else if (rank ==="J" || rank === "Q" || rank ==="K") {
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

//shuffles the unshuffled deck to put cards into random order until it runs out of cards in the unshuffled deck
function shuffleDeck () {
    const tempDeck = [...unshuffledDeck];
    const newShuffledDeck = [];
    while (tempDeck.length) {
        const rndIdx = Math.floor(Math.random() * tempDeck.length);
        newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    return newShuffledDeck;
}


function calculateScore () {
    if (dealerTotal < 22) {
        if (dealerTotal === playerTotal) {
            winner = "T";
        } else if (dealerTotal > playertotal) {
            winner = "-1";
        } else {
            winner = "1";
        }
    }
}

function calculateTotal () {
    playerTotal = playerCard1Ele.value + playerCard2Ele.value
    dealerTotal = dealerCard1Ele.value + dealerCard2Ele.value
    if (playerTotal > 21) {
        winner = "-1";
    } else if (playerTotal <22) {
        turn = "1";
    }
    
}

function checkBlackjack () {
    if (playerCard1Ele === "10" || "J" || "Q" || "K"  && playerCard2Ele === "A") {
        playerBlackjack = true;
    } else if (playerCard1Ele === "A"  && playerCard2Ele === "10" || "J" || "Q" || "K") {
        playerBlackjack = true;
    }

    if (dealerCard1Ele === "10" || "J" || "Q" || "K" && playerCard2Ele ==="A") {
        dealerBlackjack = true;
    } else if (dealerCard1Ele === "A" && playerCard2Ele === "10" || "J" || "Q" || "K" ) {
        dealerBlackjack = true;
    }
    if (playerBlackjack) {
        if (dealerBlackjack = true) {
            "You both have blackjack. Push"
        } else if (dealerBlackjack = false) {
            winner = 1;
        } else {
            winner = null;
        }
    }
}

function render () {
renderWinner();
renderDeck();
renderDealerHand();
renderPlayerHand();
}

function renderWinner () {

}

function renderDealerHand () {
    dealerCard1Ele.innerText = `${shuffledDeck[1].face}`;
    dealerCard2Ele.innerHTML = `<img src="${imageLinks[shuffledDeck[3].face]}" alt = "${shuffledDeck[3].face}"}>`;

}

function renderPlayerHand () {
    playerCard1Ele.innerHTML = `${shuffledDeck[0].face}`;
    playerCard2Ele.innerHTML = `${shuffledDeck[2].face}`;

}


function init() {
    createDeck();
    shuffleDeck();
    renderPlayerHand();
    renderDealerHand();
}




