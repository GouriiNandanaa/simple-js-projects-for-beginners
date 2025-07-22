let hasBlackJack = false;
let isAlive = false;

let message = "";
let cards = [];
let sum;


let player = {
    playerName : "Gouri",
    playerChips : 123
}


let messageEL = document.getElementById("message-el"); 
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#cards-el");






let playerEl = document.getElementById("player-el");
playerEl.textContent = player.playerName + "$" + player.playerChips;
   
function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    sum = firstCard + secondCard;
    console.log(sum); 

    cards = [firstCard, secondCard];
    isAlive = true;
    renderGame();
}
    
function renderGame(){
    cardEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i]+ " ";
    }
     
    if (sum <= 20){
        message = "Do you want to draw a new card?  " ;
        isAlive = true;
    } else if (sum === 21){
        message = "WOOOOHoOOO! You've got Blackjack!";
        hasBlackJack = true;
        isAlive = true;
    } else{
        message = "OOopsiess!  You're out of the game!";
        isAlive = false; 
    }

    messageEL.textContent = message;
    sumEl.textContent = "Sum: " + sum;
     
}

function newCard(){
    if(isAlive ===  true && hasBlackJack === false){
        console.log("Drawing a new card");
        let nextCard = getRandomCard();
        sum += nextCard;
        cards.push(nextCard);
        renderGame();
    }else{
        console.log("You cant draw new cards")
    }
} 

function getRandomCard(){
    randomNum = (Math.floor(Math.random() * 13 ) + 1);
    if(randomNum === 1){
        return 11;
    }
    else if(randomNum > 10){
        return 10;
    }
    else{
        return randomNum;
    }
}

console.log("pkpkpkpkpk")


// a new thing instead of getElementById is querySelector. Specify # for id




console.log(message);
    