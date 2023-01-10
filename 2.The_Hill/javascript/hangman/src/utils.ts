import { keyboardLayout, words } from './constants';
import { Keyboard } from './types';

const getLayout = () => {
  return window.navigator.language.startsWith('fr')
    ? keyboardLayout.azerty
    : keyboardLayout.qwerty;
};

export function createKeyboard(
  callback: (key: HTMLButtonElement, letter: string) => void,
): Keyboard {
  const keyboard = document.getElementById('keyboard')!;
  const rowTemplate = keyboard.querySelector('section')!;
  const keyTemplate = keyboard.querySelector('button')!;

  keyboard.innerHTML = '';

  const layout = getLayout();
  const keys = new Map();

  for (const letters of layout) {
    const row = rowTemplate.cloneNode() as HTMLElement;

    for (const letter of letters) {
      const clone = keyTemplate.cloneNode() as HTMLButtonElement;

      clone.textContent = letter;
      clone.onclick = () => {
        callback(clone, letter);
      };

      keys.set(letter, clone);

      row.appendChild(clone);
    }

    keyboard.appendChild(row);
  }

  return keys;
}

export function randomWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
