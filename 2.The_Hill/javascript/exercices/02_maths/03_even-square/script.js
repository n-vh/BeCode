(() => {
  document.getElementById('run').addEventListener('click', () => {
    const squares = [];

    for (let i = 1; i <= 21; i++) {
      if (i % 2 == 0) {
        squares.push(i * i);
      }
    }

    alert(squares.join(', '));
  });
})();
