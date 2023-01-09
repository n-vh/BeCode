(() => {
  Array.from(document.querySelectorAll('button')).forEach((button) => {
    button.addEventListener('click', () => {
      const input = document.getElementById('color').value;
      const color = CSS.supports('color', input) && input;

      if (color) {
        document.body.style.backgroundColor = color;
      }
    });
  });
})();
