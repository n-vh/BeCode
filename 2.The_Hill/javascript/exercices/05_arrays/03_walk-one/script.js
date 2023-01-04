(() => {
  const fruits = [
    'pomme',
    'poire',
    'fraise',
    'tomate',
    'kiwi',
    'banane',
    'orange',
    'mandarine',
    'durian',
    'pêche',
    'raisin',
    'cerise',
  ];

  document.getElementById('run').addEventListener('click', () => {
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
  });
})();
