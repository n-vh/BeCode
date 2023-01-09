const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

(() => {
  document.getElementById('run').addEventListener('click', () => {
    const elements = document.getElementById('row').children;
    const numbers = [];

    for (let i = 0; i < elements.length; i++) {
      const number = randomNumber(0, 100);
      numbers.push(number);
      elements[i].innerHTML = numbers[i];
    }

    const sum = numbers.reduce((total, n) => total + n);

    document.getElementById('min').innerHTML = Math.min(...numbers);
    document.getElementById('max').innerHTML = Math.max(...numbers);
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('average').innerHTML = sum / numbers.length;
  });
})();
