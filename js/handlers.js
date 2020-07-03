import { initGame, playerHasChosen, restartGame } from './lib';

function handleModeChoice(e) {
  initGame(e.currentTarget.dataset);
}

function handleStartClick(e) {
  e.preventDefault();
  let round = document.querySelector("[name='round']:checked").value;
  let mode = document.querySelector("[name='mode']:checked").value;
  initGame({ round, mode });
}

function handlePlayerChoice({ currentTarget }) {
  let { choice } = currentTarget.dataset;
  playerHasChosen(choice);
}

function handleRestart(e) {
  restartGame();
}

export {
  handleStartClick,
  handlePlayerChoice,
  handleModeChoice,
  handleRestart,
};
