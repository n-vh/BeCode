(() => {
  const target = document.getElementById('target');
  const table = document.createElement('table');

  for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    row.appendChild(cell);
    table.appendChild(row);
  }

  target.appendChild(table);
})();
