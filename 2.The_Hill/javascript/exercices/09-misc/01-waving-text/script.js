const text =
  "Woo-hoo! I'm making waves! Waaaay! Oh... I think I'm getting seasick... but I'm not going to let a little thing like motion sickness stop me from riding these waves and making a splash.";

const wave = [16, 20, 24, 28, 32, 26, 22, 18, 16];

(() => {
  const target = document.getElementById('target');

  target.innerHTML = '';

  for (let i = 0; i < text.length; i += wave.length) {
    const letters = text.slice(i, i + wave.length);

    letters.split('').forEach((letter, i) => {
      const span = `<span style="font-size:${wave[i]}px;">${letter}</span>`;
      const node = document.createRange().createContextualFragment(span);
      target.appendChild(node);
    });
  }
})();
