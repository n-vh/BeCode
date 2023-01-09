(() => {
  const fruits = [
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
  ];

  document.getElementById('run').addEventListener('click', () => {
    fruits.shift();
    fruits.pop();

    fruits.unshift('banane');
    fruits.push('kiwi');

    alert(fruits);
  });
})();
