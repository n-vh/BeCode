import { updateAttempt, updateTries } from './utils';

export enum GameState {
  GameOver,
  Playing,
  Win,
}

export class Game {
  private word: string;
  private letters: Set<string>;
  private guesses: Set<string>;
  private tries: number;

  constructor(word: string, tries: number) {
    this.word = word;
    this.letters = new Set(word.split(''));
    this.guesses = new Set();
    this.tries = tries;

    updateTries(this.tries);
    updateAttempt(this.puzzle);

  }

  public guess(key: HTMLButtonElement, letter: string) {
    if (this.state === GameState.Playing) {
      if (this.letters.has(letter)) {
        this.guesses.add(letter);

        this.updateAttempt();
      } else {
        this.lives -= 1;
      }

      key.disabled = true;
    }

    this.updateHangman();
  }

  public get puzzle(): string[] {
    return this.word.split('').map((letter) => {
      return this.guesses.has(letter) ? letter : ' ';
    });
  }

  private get state(): GameState {
    if (this.lives <= 0) {
      return GameState.GameOver;
    } else if (this.letters.size === this.guesses.size) {
      return GameState.Win;
    } else {
      return GameState.Playing;
    }
  }
}
