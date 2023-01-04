const text =
  "Woo-hoo! I'm making waves! Waaaay! Oh... I think I'm getting seasick... but I'm not going to let a little thing like motion sickness stop me from riding these waves and making a splash.";

const wave = [16, 20, 24, 28, 32, 26, 22, 18, 16];

const addWave = (string) => {
  return string
    .split('')
    .map((letter, i) => {
      return `<span style="font-size:${wave[i]}px;">${letter}</span>`;
    })
    .join('');
};

(() => {
  const element = document.getElementById('target');

  let innerHTML = '';

  for (let i = 0; i < text.length; i += wave.length) {
    const letters = text.slice(i, i + wave.length);
    innerHTML += addWave(letters);
  }

  element.innerHTML = innerHTML;
})();
