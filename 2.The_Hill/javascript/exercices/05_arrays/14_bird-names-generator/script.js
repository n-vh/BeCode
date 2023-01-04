(() => {
  const birds = [
    { name: 'mouette', fem: true },
    { name: 'corbeau' },
    { name: 'mésange', fem: true },
    { name: 'hibou' },
    { name: 'buse', fem: true },
    { name: 'pigeon' },
    { name: 'pie', fem: true },
    { name: 'vautour' },
    { name: 'faucon' },
    { name: 'rouge-gorge' },
    { name: 'tourterelle', fem: true },
    { name: 'corneille', fem: true },
  ];
  const adjectives = new Set([
    'cendré',
    'huppé',
    'chantant',
    'hurlant',
    'perché',
    'grand',
    'petit',
    'bleu',
    'pantelant',
    'tangent',
    'arboré',
  ]);

  const randomInArray = (array) => {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  };

  document.getElementById('run').addEventListener('click', () => {
    const element = document.getElementById('target');

    const bird = randomInArray(birds);
    const adjective = randomInArray([...adjectives]);

    element.innerHTML = bird.fem
      ? `La ${bird.name} ${adjective}e`
      : `Le ${bird.name} ${adjective}`;
  });
})();
