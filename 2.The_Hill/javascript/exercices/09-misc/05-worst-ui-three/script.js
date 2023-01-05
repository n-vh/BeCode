(() => {
  const groups = document.querySelectorAll('.field.slot');
  const target = document.getElementById('target');

  const updatePhoneNumber = () => {
    let phoneNumber = '';
    groups.forEach((group) => {
      const input = group.children[0];
      phoneNumber += input.value;
    });
    target.textContent = `+${phoneNumber}`;
  };

  groups.forEach((group) => {
    const [input, button] = group.children;

    const min = Number(input.dataset.min);
    const max = Number(input.dataset.max);
    let value = Number(input.value);

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
        updatePhoneNumber();
        button.innerHTML = 'Start';
      }
    };

    increment();
    button.addEventListener('click', handleClick);
  });
})();
