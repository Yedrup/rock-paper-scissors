import { selectPanelFormEl, isFirstLoad, loadingEl } from './elements';

const DELAY_MS = 2050;

function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startGameManagement() {
  if (isFirstLoad) {
    await wait(DELAY_MS);
    selectPanelFormEl.hidden = false;
    loadingEl.hidden = true;
    let titleEl = document.querySelector('.js-select-panel__title');
    selectPanelFormEl.addEventListener('animationend', () => {
      selectPanelFormEl.classList.remove('u-animation-appearance');
      titleEl.classList.add('u-animation-shift');
    });
  }
}

startGameManagement();
