//

let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";

let messageEl = document.getElementById("message");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");

let playerInfoEl = document.getElementById("player-info");

let player = {
	name: "Lakshmi",
	chips: 145,
};

playerInfoEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1; // multiplying with the range we want than including that number by adding +1
	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	} else {
		return randomNumber;
	}
}

function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
}

function renderGame() {
	cardsEl.textContent = "";
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}
	sumEl.textContent = sum;
	if (sum < 21) {
		message = "Would you like to draw a new card? .";
	} else if (sum === 21) {
		message = "You've got the blackjack! ";
		hasBlackJack = true;
	} else {
		message = "You are out the game.";
		isAlive = false;
	}

	messageEl.textContent = message;
}

function drawNewCard() {
	if (isAlive === true && hasBlackJack === false) {
		let newCard = getRandomCard();
		sum += newCard;
		cards.push(newCard);
		renderGame();
	}
}
