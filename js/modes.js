let modeDefault = {
  name: 'modeDefault',
  choicesAvailable: ['rock', 'paper', 'scissors'],
  relationsChoices: {
    rock: {
      paper: {
        isWinningAgainst: false,
        text: 'You loose 😞, Paper covers the Rock',
      },
      scissors: {
        isWinningAgainst: true,
        text: 'You win! 👏 Rock crushes Scissors!',
      },
    },
    paper: {
      scissors: {
        isWinningAgainst: false,
        text: 'You loose 😞, Scissors cut the Paper!',
      },
      rock: {
        isWinningAgainst: true,
        text: 'You win! 👏 Paper covers the Rock!',
      },
    },
    scissors: {
      paper: {
        isWinningAgainst: true,
        text: 'You win! 👏 Scissors cut the Paper!',
      },
      rock: {
        isWinningAgainst: false,
        text: 'You loose 😞, Rock crushes Scissors!',
      },
    },
    sameChoice: {
      isWinningAgainst: false,
      text: 'No winner ',
    },
  },
  inputsIHM: [
    {
      name: 'scissors',
      displayName: 'Scissors',
      alt: 'hand with two fingers V representing scissors',
    },
    {
      name: 'paper',
      displayName: 'Paper',
      alt: 'hand open representing a sheet of paper',
    },
    {
      name: 'rock',
      displayName: 'Rock',
      alt: 'fist representing a rock',
    },
  ],
};

let modeTBBT = {
  name: 'modeTBBT',
  choicesAvailable: [...modeDefault.choicesAvailable, 'spock', 'lizard'],
  relationsChoices: {
    ...modeDefault.relationsChoices,
    rock: {
      ...modeDefault.relationsChoices.rock,
      lizard: {
        isWinningAgainst: true,
        text: 'You win! 👏 Rock crushes the Lizard',
      },
      spock: {
        isWinningAgainst: false,
        text: 'You loose 😞, Spock vaporizes Rock',
      },
    },
    paper: {
      ...modeDefault.relationsChoices.paper,
      lizard: {
        isWinningAgainst: false,
        text: 'You loose 😞, Lizard eats Paper',
      },
      spock: {
        isWinningAgainst: true,
        text: 'You win! 👏 Paper disproves Spock',
      },
    },
    scissors: {
      ...modeDefault.relationsChoices.scissors,
      spock: {
        isWinningAgainst: false,
        text: 'You loose 😞, Spock smashes Scissors',
      },
      lizard: {
        isWinningAgainst: true,
        text: 'You win! 👏 Scissors decapitate Lizard',
      },
    },
    lizard: {
      paper: {
        isWinningAgainst: true,
        text: 'You win! 👏 Lizard eats Paper!',
      },
      rock: {
        isWinningAgainst: false,
        text: 'You loose 😞, Rock crushes Lizard!',
      },
      spock: {
        isWinningAgainst: true,
        text: 'You Win! 👏 Lizard poisons Spock!',
      },
      scissors: {
        isWinningAgainst: false,
        text: 'You loose 😞, Scissors decapitate Lizard',
      },
    },
    spock: {
      paper: {
        isWinningAgainst: false,
        text: 'You loose 😞, Paper disproves Spock',
      },
      rock: {
        isWinningAgainst: true,
        text: 'You win! 👏 Spock vaporizes Rock!',
      },
      lizard: {
        isWinningAgainst: false,
        text: 'You loose 😞, Lizard poisons Spock!',
      },
      scissors: {
        isWinningAgainst: true,
        text: 'You win! 👏 Spock smashes Scissors!',
      },
    },
  },
  inputsIHM: [
    ...modeDefault.inputsIHM,
    {
      name: 'spock',
      displayName: 'Spock',
      alt: 'Actor Leonard Nimoy playing Spock doing the Vulcan "salute" sign',
    },
    {
      name: 'lizard',
      displayName: 'Lizard',
      alt: 'Komodo dragon, the largest extant species of lizard',
    },
  ],
};

let modes = {
  modeTBBT,
  modeDefault,
};

export { modes };
