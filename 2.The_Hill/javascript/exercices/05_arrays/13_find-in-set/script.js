(() => {
  const people = new Set([
    'Nicolas',
    'Anthony',
    'Leny',
    'Alexandre',
    'Eric',
    'Caroline',
    'Esther',
    'Simon',
    'Lucas',
  ]);

  document.getElementById('run').addEventListener('click', () => {
    console.log(people.size);

    if (people.has('Alexandre')) {
      console.log('Alexandre is here! 🎉');
    }
  });
})();
