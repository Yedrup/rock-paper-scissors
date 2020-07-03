import {
  initGameIHM,
  endGameIHM,
  displayScore,
  restartGameIHM,
} from './elements';
import { modes } from './modes';

let scoreToReach;
let playerScorePoint;
let computerScorePoint;
let isGameFinish;
let modeSelected;

function initGame({ mode, round }) {
  modeSelected = modes[mode];
  scoreToReach = round;
  playerScorePoint = 0;
  computerScorePoint = 0;
  isGameFinish = false;
  initGameIHM(modeSelected);
}

function restartGame() {
  restartGameIHM({ mode: modeSelected.name, round: scoreToReach });
}

function playerHasChosen(playerChoice) {
  gameTurn(playerChoice);
}

function gameTurn(playerChoice) {
  if (isGameFinish) return;
  let { choicesAvailable } = modeSelected;
  let computerChoice = getComputerChoice(choicesAvailable);
  compareChoices(playerChoice, computerChoice);
}

function handleEndGame() {
  let isPlayerWinning = playerScorePoint > computerScorePoint;
  endGameIHM({ isPlayerWinning });
}

function compareChoices(playerChoice, computerChoice) {
  let textResult;
  let { relationsChoices } = modeSelected;
  if (computerChoice === playerChoice) {
    let { text } = relationsChoices['sameChoice'];
    textResult = text;
  } else {
    let { isWinningAgainst, text } = relationsChoices[playerChoice][
      computerChoice
    ];
    isWinningAgainst ? ++playerScorePoint : ++computerScorePoint;
    textResult = text;
  }
  displayScore({ textResult });

  isGameFinish =
    playerScorePoint >= scoreToReach || computerScorePoint >= scoreToReach;
  if (isGameFinish) {
    handleEndGame();
    return;
  }
}

function getComputerChoice(choicesAvailable) {
  let computerChoiceIndex = Math.floor(Math.random() * choicesAvailable.length);
  return choicesAvailable[computerChoiceIndex];
}

export {
  initGame,
  playerHasChosen,
  playerScorePoint,
  computerScorePoint,
  scoreToReach,
  restartGame,
};
