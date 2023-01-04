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
    alert(fruits[4 - 1]);
  });
})();
