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
    fruits.forEach((fruit) => {
      console.log(fruit);
    });
  });
})();
