export enum GameState {
  GameOver,
  Playing,
  Win,
}

export class Game {
  private word: string;
  private tries: number;
  private lives: number;
  private letters: Set<string>;
  private guesses: Set<string>;

  constructor(word: string, lives: number) {
    this.word = word;
    this.tries = lives;
    this.lives = lives;
    this.letters = new Set(word.split(''));
    this.guesses = new Set();

    this.updateHangman();
    this.updateAttempt();
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
    hangmanElement.src = `./assets/hangman-${this.tries - this.lives}.svg`;
  }
}
