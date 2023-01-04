(() => {
  const keys = ['name', 'species', 'age', 'gender', 'color'];
  const values = ['Skitty', 'cat', 9, 'female', 'tabby'];

  document.getElementById('run').addEventListener('click', () => {
    const entries = keys.map((key, i) => [key, values[i]]);
    console.log(Object.fromEntries(entries));
  });
})();
