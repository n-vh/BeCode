const text =
  'I am a text that will appear in a "typewriter" effect, a bit like like in the films noirs. Except... I don\'t know who the killer is! YIs there really one? Is there really one? Does he live at 21? So many mysteries!';

const randomTime = () => {
  return Math.floor(Math.random() * 150) + 100;
};

(() => {
  const element = document.getElementById('target');
  let writing = '';
  let position = 0;

  (function loop() {
    setTimeout(() => {
      writing += text[position++];

      element.innerHTML = writing;
      loop();
    }, randomTime());
  })();
})();
