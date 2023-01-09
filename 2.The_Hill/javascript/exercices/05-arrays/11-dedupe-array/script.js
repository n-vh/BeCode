(() => {
  const fruits = [
    'cerise',
    'durian',
    'pomme',
    'poire',
    'fraise',
    'tomate',
    'orange',
    'mandarine',
    'fraise',
    'durian',
    'pêche',
    'cerise',
    'raisin',
    'cerise',
  ];

  document.getElementById('run').addEventListener('click', () => {
    const dedoublonne = [...new Set(fruits)];
    console.log(dedoublonne);
  });
})();
