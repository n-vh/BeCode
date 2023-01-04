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
    const hasApple = fruits.includes('pomme');

    if (hasApple) {
      console.log("There's an apple in the array! 🍎");
    }
  });
})();
