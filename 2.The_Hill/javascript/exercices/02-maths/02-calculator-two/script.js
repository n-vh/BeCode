(() => {
  const toNumber = (value) => {
    const number = parseInt(value);
    return Number.isInteger(number) ? number : 0;
  };

  const performOperation = (operation) => {
    const one = document.getElementById('op-one').value;
    const two = document.getElementById('op-two').value;

    let result;

    switch (operation) {
      case 'addition':
        result = toNumber(one) + toNumber(two);
        break;
      case 'substraction':
        result = toNumber(one) - toNumber(two);
        break;
      case 'multiplication':
        result = toNumber(one) * toNumber(two);
        break;
      case 'division':
        result = toNumber(one) / toNumber(two);
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
