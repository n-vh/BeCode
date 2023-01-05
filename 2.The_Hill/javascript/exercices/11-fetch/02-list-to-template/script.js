(() => {
  const template = document.getElementById('tpl-hero');
  const target = document.getElementById('target');

  const handleClick = async () => {
    target.innerHTML = '';

    const response = await fetch('http://localhost:3000/heroes');
    const heroes = await response.json();

    for (const hero of heroes) {
      const clone = document.importNode(template.content, true);

      clone.querySelector('.name').textContent = hero.name;
      clone.querySelector('.alter-ego').textContent = hero.alterEgo;
      clone.querySelector('.powers').textContent = hero.abilities.join(', ');

      target.appendChild(clone);
    }
  };

  document.getElementById('run').addEventListener('click', handleClick);
})();
