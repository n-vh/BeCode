(() => {
  const toNumber = (value) => {
    const number = parseInt(value);
    return Number.isInteger(number) ? number : 0;
  };

  document.getElementById('run').addEventListener('click', () => {
    const input = document.getElementById('number').value;
    const number = toNumber(input);

    let result = 1;

    for (let i = 2; i <= number; i++) {
      result *= i;
    }

    alert(result);
  });
})();
