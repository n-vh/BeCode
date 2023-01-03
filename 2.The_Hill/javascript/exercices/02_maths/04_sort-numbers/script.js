(() => {
  const toNumber = (value) => {
    const number = parseInt(value);
    return Number.isInteger(number) ? number : 0;
  };

  document.getElementById('run').addEventListener('click', () => {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(toNumber);
    numbers.sort((a, b) => a - b);

    alert(numbers.join(', '));
  });
})();
