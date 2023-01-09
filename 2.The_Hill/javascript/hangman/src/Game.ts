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

  public guess(letter: string) {
    if (this.letters.has(letter)) {
      this.guesses.add(letter);
      updateAttempt(this.puzzle);
    } else {
      this.tries -= 1;
    }
    updateTries(this.tries);
  }

  public get puzzle(): string[] {
    let puzzle = '';

    for (const letter of this.word) {
      if (this.guesses.has(letter)) {
        puzzle += letter;
      } else {
        puzzle += ' ';
      }
    }

    return puzzle.split('');
  }
}
