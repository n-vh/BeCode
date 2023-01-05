(() => {
  const handleClick = async () => {
    const heroId = document.getElementById('hero-id').value;

    const response = await fetch('http://localhost:3000/heroes/' + heroId, {
      method: 'DELETE',
    });

    console.log(response);
  };

  document.getElementById('run').addEventListener('click', handleClick);
})();
