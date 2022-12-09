(() => {
  const audio = new Audio('./assets/audio.mp3');

  setTimeout(() => {
    audio.play();
  }, 7 * 1000);
})();
