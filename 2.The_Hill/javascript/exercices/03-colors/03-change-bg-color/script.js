(() => {
  const randomHexColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  document.getElementById('run').addEventListener('click', () => {
    document.body.style.backgroundColor = randomHexColor();
  });
})();
