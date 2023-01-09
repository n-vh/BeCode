(() => {
  const slider = document.getElementById('slider');
  const target = document.getElementById('target');

  slider.addEventListener('input', (e) => {
    target.textContent = `+${e.target.value}`;
  });
})();
