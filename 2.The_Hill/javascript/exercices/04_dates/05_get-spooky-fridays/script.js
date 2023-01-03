(() => {
  const months = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  ];

  document.getElementById('run').addEventListener('click', () => {
    const year = document.getElementById('year').value;
    const list = [];

    for (let month = 0; month < 12; month++) {
      const date = new Date(year, month, 1);

      if (date.getDay() === 0) {
        list.push(months[month]);
      }
    }

    alert(list);
  });
})();
