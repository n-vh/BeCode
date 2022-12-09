(() => {
  const audio = new Audio('./audio.mp3');

  setTimeout(() => {
    audio.play();
  }, 7 * 1000);
})();
