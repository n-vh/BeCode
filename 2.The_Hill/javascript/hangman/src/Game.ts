import { Keyboard } from './types';
import { randomWord } from './utils';

export enum GameState {
  GameOver,
  Playing,
  Win,
}

export class Game {
  static MAX_TRIES = 7;

  public word: string;

  private letters: Set<string>;
  private correct: Set<string>;
  private incorrect: Set<string>;

  constructor() {
    this.word = randomWord();
    this.letters = new Set(this.word.split(''));
    this.correct = new Set();
    this.incorrect = new Set();

    this.restoreGame();
    this.updateHangman();
    this.updateAttempt();
  }

  public guess(key: HTMLButtonElement, letter: string) {
    if (this.state === GameState.Playing) {
      if (this.letters.has(letter)) {
        this.correct.add(letter);
      } else {
        this.incorrect.add(letter);
      }

      this.updateAttempt();
      key.disabled = true;
    }

    this.updateHangman();
    this.updateLocalStorage();

    return this.state;
  }

  public get puzzle(): string[] {
    return this.word.split('').map((letter) => {
      return this.correct.has(letter) ? letter : ' ';
    });
  }

  public get state(): GameState {
    if (this.incorrect.size >= Game.MAX_TRIES) {
      return GameState.GameOver;
    } else if (this.letters.size === this.correct.size) {
      return GameState.Win;
    } else {
      return GameState.Playing;
    }
  }

  private updateAttempt() {
    const attempt = document.getElementById('attempt') as HTMLDivElement;
    const letterTemplate = attempt.querySelector('span')!;

    attempt.innerHTML = '';

    for (const letter of this.puzzle) {
      const clone = letterTemplate.cloneNode();
      clone.textContent = letter;

      attempt.appendChild(clone);
    }
  }

  private updateHangman() {
    const hangmanElement = document.getElementById('hangman') as HTMLImageElement;
    hangmanElement.src = `./hangman-${this.incorrect.size}.svg`;
  }

  private updateLocalStorage() {
    window.localStorage.setItem(
      'game',
      JSON.stringify({
        word: this.word,
        correct: [...this.correct],
        incorrect: [...this.incorrect],
      }),
    );
  }

  private restoreGame() {
    const game = window.localStorage.getItem('game');

    if (game) {
      const { word, correct, incorrect } = JSON.parse(game);
      this.word = word;
      this.letters = new Set(word.split(''));
      this.correct = new Set(correct);
      this.incorrect = new Set(incorrect);
    }

    this.updateLocalStorage();
  }

  public resetGame(modal: HTMLElement) {
    this.word = randomWord();
    this.letters = new Set(this.word.split(''));
    this.correct = new Set();
    this.incorrect = new Set();

    this.updateHangman();
    this.updateAttempt();
    this.updateLocalStorage();

    modal.classList.add('hidden');
  }

  public restoreKeyboard(keyboard: Keyboard) {
    const guesses = [...this.correct].concat(...this.incorrect);

    keyboard.forEach((e) => (e.disabled = false));

    for (const guess of guesses) {
      const button = keyboard.get(guess)!;
      button.disabled = true;
    }
  }
}
