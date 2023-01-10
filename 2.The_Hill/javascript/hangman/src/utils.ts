import { keyboardLayout, words } from './constants';

const getLayout = () => {
  return window.navigator.language.startsWith('fr')
    ? keyboardLayout.azerty
    : keyboardLayout.qwerty;
};

export function createKeyboard(
  callback: (key: HTMLButtonElement, letter: string) => void,
) {
  const keyboard = document.getElementById('keyboard')!;
  const rowTemplate = keyboard.querySelector('section')!;
  const keyTemplate = keyboard.querySelector('button')!;

  keyboard.innerHTML = '';

  const layout = getLayout();

  for (const letters of layout) {
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


export function updateTries(tries: number) {
  const triesElement = document.getElementById('tries') as HTMLDivElement;

  triesElement.innerHTML = '';

  for (let i = 0; i < tries; i++) {
    triesElement.innerHTML += '❤️';
  }
export function randomWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
