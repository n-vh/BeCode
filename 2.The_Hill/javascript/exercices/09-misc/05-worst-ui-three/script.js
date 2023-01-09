const toNumber = (n) => {
  const number = Number(n);
  return !Number.isNaN(number) ? number : 0;
};

(() => {
  const groups = document.querySelectorAll('.field.slot');
  const target = document.getElementById('target');

  const updatePhoneNumber = (target) => {
    let phoneNumber = '';
    groups.forEach((group) => {
      const input = group.querySelector('input');
      phoneNumber += input.value.padStart(2, '0');
    });
    target.textContent = `+${phoneNumber}`;
  };

  groups.forEach((group) => {
    const [input, button] = group.children;

    const min = toNumber(input.dataset.min);
    const max = toNumber(input.dataset.max);
    let value = toNumber(input.value);

    let stopped = false;

    const increment = () => {
      if (!stopped) {
        value += 1;

        if (value > max) {
          value = min;
        }

        input.value = value;

        setTimeout(() => {
          increment();
        }, 50);
      }
    };

    const handleClick = () => {
      stopped = !stopped;

      if (!stopped) {
        increment();
        button.innerHTML = 'Stop';
      } else {
        updatePhoneNumber(target);
        button.innerHTML = 'Start';
      }
    };

    increment();
    button.addEventListener('click', handleClick);
  });
})();
