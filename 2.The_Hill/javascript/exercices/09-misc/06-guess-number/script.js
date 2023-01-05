(() => {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const number = randomNumber(1, 100);

  let tries = 0;

  while (true) {
    const value = prompt('Guess a number between 1 and 100 🎲');
    const guess = Number(value);

    if (value === null || isNaN(guess)) {
      break;
    }

    tries += 1;

    if (guess > number) {
      alert('Smaller!');
    } else if (guess < number) {
      alert('Bigger!');
    } else {
      alert('Well done! 🎉\nYou found it in ' + tries + ' tries!');
      break;
    }
  }
})();
