const toNumber = (n) => {
  const number = Number(n);
  return !Number.isNaN(number) ? number : 0;
};

(() => {
  const performOperation = (operation) => {
    const one = toNumber(document.getElementById('op-one').value);
    const two = toNumber(document.getElementById('op-two').value);

    let result;

    switch (operation) {
      case 'addition':
        result = one + two;
        break;
      case 'substraction':
        result = one - two;
        break;
      case 'multiplication':
        result = one * two;
        break;
      case 'division':
        result = one / two;
        break;
    }

    alert(result);
  };

  Array.from(document.querySelectorAll('button.operator')).forEach((button) => {
    button.addEventListener('click', () => {
      performOperation(button.id);
    });
  });
})();
