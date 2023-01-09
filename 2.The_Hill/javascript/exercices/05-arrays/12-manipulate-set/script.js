(() => {
  const fruits = new Set([
    'pomme',
    'poire',
    'fraise',
    'tomate',
    'orange',
    'mandarine',
    'durian',
    'pêche',
    'raisin',
    'cerise',
  ]);

  document.getElementById('run').addEventListener('click', () => {
    fruits.delete('pomme');
    fruits.delete('kiwi');
    fruits.add('banane');
    fruits.add('kiwi');

    console.log(fruits);
  });
})();
