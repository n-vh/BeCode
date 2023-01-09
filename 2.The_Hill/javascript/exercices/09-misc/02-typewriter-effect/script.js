const fullText =
  'I am a text that will appear in a "typewriter" effect, a bit like like in the films noirs. Except... I don\'t know who the killer is! Is there really one? Is there really one? Does he live at 21? So many mysteries!';

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

(() => {
  const element = document.getElementById('target');

  const type = (text = '', i = 0) => {
    if (i < fullText.length) {
      text += fullText[i];
      element.innerHTML = text;

      setTimeout(() => {
        type(text, i + 1);
      }, randomNumber(150, 250));
    }
  };

  type();
})();
