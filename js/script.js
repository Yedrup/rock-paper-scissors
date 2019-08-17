const message = document.querySelector("#js-message");
const messageEndGame = document.querySelector("#js-end-game-message");
const playerScoreIHM = document.querySelector("#js-player-score");
const computerScoreIHM = document.querySelector("#js-computer-score");
const startButton = document.querySelector("#js-button-start-game");
const gameBoard = document.querySelector("#js-game-board");
const displayScoreToReach = document.querySelector("#js-score-to-reach");
const scoreToReach = 8;


let playerScorePoint;
let computerScorePoint;
let isGameFinish;


function initGame() {
	playerScorePoint = 0;
	computerScorePoint = 0;
	displayScoreToReach.innerHTML=scoreToReach;
	isGameFinish = false;
	messageEndGame.innerHTML = "";
	initIHM();
}

function playerHasChosen(playerChoice) {
	gameTurn(playerChoice)
}

function initIHM() {
	gameBoard.style.display = "flex";
	gameBoard.className = 'game-board game-board--displayed';
	message.innerHTML = "Good Luck!";
	startButton.innerHTML = "Restart";
	playerScoreIHM.innerHTML = playerScorePoint;
	computerScoreIHM.innerHTML = computerScorePoint;
}

function endGameIHM(isPlayerWinning) {
	if (isPlayerWinning) {
		messageEndGame.innerHTML = "Yeah! you win!";
	} else {
		messageEndGame.innerHTML = "Oh no! Computer wins! :(";
	}
}

function gameTurn(playerChoice) {
	if(isGameFinish) return;
	let computerChoice = getComputerChoice();
	compareChoices(playerChoice, computerChoice);
}

function compareChoices(playerChoice, computerChoice) {
	let result;
	if (playerChoice === "rock") {
		if (computerChoice === playerChoice) {
			result = "No winner";
		} else if (computerChoice === "paper") {
			result = "You loose, paper covers the rock"
			computerScorePoint++;
		} else {
			result = "You win! rocks crushes sciscors!"
			playerScorePoint++;
		}
	} else if (playerChoice === "paper") {
		if (computerChoice === playerChoice) {
			result = "No winner";
		} else if (computerChoice === "rock") {
			result = "You win, paper covers the rock";
			playerScorePoint++;
		} else {
			result = "You loose! scissors cut the paper!";
			computerScorePoint++;
		}
	} else {
		if (computerChoice === playerChoice) {
			result = "No winner";
		} else if (computerChoice === "paper") {
			result = "You Win, ciscors cut the paper";
			playerScorePoint++;
		} else {
			result = "You loose! rock crushes scissors!";
			computerScorePoint++;
		}
	}

	isGameFinish = playerScorePoint >= scoreToReach || computerScorePoint >= scoreToReach;
	if (isGameFinish) {
		message.innerHTML = `Final score : 
		 you ${playerScorePoint} - ${computerScorePoint} computer `;
		if (playerScorePoint > computerScorePoint) {
			endGameIHM(true);
		} else {
			endGameIHM(false);
		}
	} else {
		message.innerHTML = result;
	}
	playerScoreIHM.innerHTML = playerScorePoint;
	computerScoreIHM.innerHTML = computerScorePoint;
}


function getComputerChoice() {
	let computerChoiceNum = Math.random();
	let computerChoice;
	if (computerChoiceNum < 0.34) {
		computerChoice = "rock";
	} else if (computerChoiceNum < 0.67) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissor";
	}
	return computerChoice;
}