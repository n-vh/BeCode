import './style.css';
import { Game } from './Game';
import { createKeyboard } from './utils';
import { GameState } from './Game';

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();

  const modal = document.getElementById('modal')!;
  const title = modal.querySelector('.title')!;
  const reset = modal.querySelector('button')!;

  reset.onclick = () => {
    game.resetGame(modal);
    game.restoreKeyboard(keyboard);
  };

  const updateState = (state: GameState) => {
    if (+state === GameState.Playing) {
      return;
    }

    if (+state === GameState.Win) {
      title.innerHTML = 'You won! 🎉';
    } else {
      title.innerHTML = `You lost... 🤷<br>The word was "${game.word}".`;
    }

    modal.classList.remove('hidden');
  };

  const keyboard = createKeyboard((key, letter) => {
    const state = game.guess(key, letter);

    if (+state === GameState.Playing) {
      return;
    }

    updateState(state);
  });

  updateState(game.state);
  game.restoreKeyboard(keyboard);
});
