import './style.css';
import { Game } from './Game';
import { createKeyboard } from './utils';

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game('tailwind', 5);

  createKeyboard((key, letter) => {
    key.disabled = true;
    game.guess(letter);
  });
});
