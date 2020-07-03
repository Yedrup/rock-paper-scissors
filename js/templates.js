import images from '../images/**.jpg';

function generateCardHTML({ name, displayName, alt }) {
  return `
  <button class="card game-board__card js-game-board__card" data-choice="${name}">
    <img class="card__image game-board__card__img" src="${images[name]}" alt="${alt}">
    <p class="card__title">${displayName}</p>
  </button>
`;
}

function generateCardsHTML({ inputsIHM }) {
  return inputsIHM.map(generateCardHTML).join('');
}

export { generateCardsHTML };
