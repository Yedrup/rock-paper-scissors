import { playerScorePoint, computerScorePoint, scoreToReach } from './lib';
import {
  handlePlayerChoice,
  handleStartClick,
  handleRestart,
} from './handlers';
import { generateCardsHTML } from './templates';

let isFirstLoad = true;
const loadingEl = document.querySelector('.js-loader');

const selectPanelFormEl = document.querySelector('.js-select-panel');

const cardsSelectModeEl = Array.from(
  selectPanelFormEl.querySelectorAll('.js-select-game__card')
);

const inputsSelectRoundEl = Array.from(
  selectPanelFormEl.querySelectorAll('.js-select-rounds input[name="round"]')
);
const inputsSelectModeEl = Array.from(
  selectPanelFormEl.querySelectorAll('.js-select-game__card input[name="mode"]')
);

const message = document.querySelector('.js-game-board__message');
const messageEndGame = document.querySelector('.js-game-board__end-message');
const playerScoreIHM = document.querySelector('.js-player-score');
const computerScoreIHM = document.querySelector('.js-computer-score');
const gameBoard = document.querySelector('.js-game-board');
const displayScoreToReach = document.querySelector('.js-score-to-reach');
const cardsWrapperEl = document.querySelector('.js-game-board__cards');

const buttonRestart = document.querySelector('.js-button-restart');
let buttonsCardsChoices;

selectPanelFormEl.addEventListener('submit', handleStartClick);

function initGameIHM(mode) {
  isFirstLoad = false;
  displayScoreToReach.innerHTML = `<span class="highlighted">${scoreToReach}</span>`;
  messageEndGame.innerHTML = '';
  buttonRestart.hidden = true;
  gameBoard.hidden = false;
  selectPanelFormEl.hidden = true;
  message.innerHTML = 'Good Luck!';
  playerScoreIHM.innerHTML = playerScorePoint;
  computerScoreIHM.innerHTML = computerScorePoint;

  let cardHTML = generateCardsHTML(mode);
  cardsWrapperEl.innerHTML = cardHTML;
  buttonsCardsChoices = Array.from(
    cardsWrapperEl.querySelectorAll('.js-game-board__card')
  );
  buttonsCardsChoices.forEach((element) => {
    element.addEventListener('click', handlePlayerChoice);
  });
}

function endGameIHM({ isPlayerWinning }) {
  if (isPlayerWinning) {
    messageEndGame.innerHTML = 'Yeah! you win! 💪';
  } else {
    messageEndGame.innerHTML = 'Oh no! Computer wins! 😞';
  }
  buttonsCardsChoices.forEach((element) => {
    element.removeEventListener('click', handlePlayerChoice);
  });
  buttonRestart.hidden = false;
  buttonRestart.addEventListener('click', handleRestart);
}

function displayScore({ textResult }) {
  playerScoreIHM.innerHTML = playerScorePoint;
  computerScoreIHM.innerHTML = computerScorePoint;
  message.innerHTML = textResult;
}

function applyLastUsedSettings({ inputsArray, value }) {
  // unCheck all inputs
  inputsArray.forEach((input) => (input.checked = false));
  // find the last mode used by player  and check it
  let lastUsed = inputsArray.find((input) => input.value === value);
  lastUsed.checked = true;
}

function restartGameIHM({ mode, round }) {
  gameBoard.hidden = true;
  selectPanelFormEl.hidden = false;
  let settingsInputs = [
    { inputsArray: inputsSelectRoundEl, value: round },
    { inputsArray: inputsSelectModeEl, value: mode },
  ];
  settingsInputs.forEach(applyLastUsedSettings);
}

export {
  initGameIHM,
  endGameIHM,
  displayScore,
  restartGameIHM,
  selectPanelFormEl,
  isFirstLoad,
  loadingEl,
};
