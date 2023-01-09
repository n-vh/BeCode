import { keyboardLayout } from './constants';

export function createKeyboard(
  callback: (key: HTMLButtonElement, letter: string) => void,
) {
  const keyboard = document.getElementById('keyboard')!;
  const rowTemplate = keyboard.querySelector('section')!;
  const keyTemplate = keyboard.querySelector('button')!;

  keyboard.innerHTML = '';

  for (const letters of keyboardLayout) {
    const row = rowTemplate.cloneNode() as HTMLElement;

    for (const letter of letters) {
      const clone = keyTemplate.cloneNode() as HTMLButtonElement;

      clone.textContent = letter;
      clone.onclick = () => {
        callback(clone, letter);
      };

      row.appendChild(clone);
    }

    keyboard.appendChild(row);
  }
}

export function updateAttempt(letters: string[]) {
  const attempt = document.getElementById('attempt') as HTMLDivElement;
  const letterTemplate = attempt.querySelector('span')!;

  attempt.innerHTML = '';

  for (const letter of letters) {
    const clone = letterTemplate.cloneNode();
    clone.textContent = letter;

    attempt.appendChild(clone);
  }
}

export function updateTries(tries: number) {
  const triesElement = document.getElementById('tries') as HTMLDivElement;

  triesElement.innerHTML = '';

  for (let i = 0; i < tries; i++) {
    triesElement.innerHTML += '❤️';
  }
}
