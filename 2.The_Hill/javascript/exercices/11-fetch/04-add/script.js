(() => {
  const handleClick = async () => {
    const heroName = document.getElementById('hero-name').value;
    const alterEgo = document.getElementById('hero-alter-ego').value;
    const abilities = document.getElementById('hero-powers').value;

    const response = await fetch('http://localhost:3000/heroes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: heroName,
        alterEgo: alterEgo,
        abilities: abilities.split(', '),
      }),
    });

    const heroes = await response.json();

    console.log(heroes);
  };

  document.getElementById('run').addEventListener('click', handleClick);
})();
