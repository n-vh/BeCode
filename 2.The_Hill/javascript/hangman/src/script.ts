import './style.css';
import { Game } from './Game';
import { createKeyboard } from './utils';
import { createKeyboard, randomWord } from './utils';

document.addEventListener('DOMContentLoaded', () => {
  const word = randomWord();
  const game = new Game(word, 7);

  createKeyboard((key, letter) => {
    key.disabled = true;
    game.guess(letter);
  });
});
