const toNumber = (n) => {
  const number = Number(n);
  return !Number.isNaN(number) ? number : 0;
};

(() => {
  const buttons = document.querySelectorAll('.actions button');
  const target = document.getElementById('target');

  const updatePhoneNumber = () => {
    let phoneNumber = '';
    buttons.forEach((button) => {
      phoneNumber += button.textContent;
    });
    target.textContent = `+${phoneNumber}`;
  };

  const handleClick = ({ target: button }) => {
    const min = toNumber(button.dataset.min);
    const max = toNumber(button.dataset.max);
    let value = toNumber(button.textContent);

    value += 1;

    if (value > max) {
      value = min;
    }

    button.textContent = value.toString().padStart(2, '0');
    updatePhoneNumber();
  };

  buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
  });
})();
