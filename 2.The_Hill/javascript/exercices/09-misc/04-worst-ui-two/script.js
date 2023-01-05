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
    const min = Number(button.dataset.min);
    const max = Number(button.dataset.max);
    let value = Number(button.textContent);

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
