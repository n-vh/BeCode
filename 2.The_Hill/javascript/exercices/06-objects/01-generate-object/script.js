(() => {
  document.getElementById('run').addEventListener('click', () => {
    const object = new Object({
      lastname: 'Van Hée',
      firstname: 'Nils',
      age: 26,
      city: 'Brussels',
      country: 'Belgium',
    });

    console.log(object);
  });
})();
