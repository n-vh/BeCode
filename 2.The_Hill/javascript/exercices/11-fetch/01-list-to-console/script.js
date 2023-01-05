(() => {
  const handleClick = async () => {
    const response = await fetch('http://localhost:3000/heroes');
    const heroes = await response.json();

    console.log(heroes);
  };

  document.getElementById('run').addEventListener('click', handleClick);
})();
