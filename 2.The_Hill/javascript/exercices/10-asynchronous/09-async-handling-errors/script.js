(() => {
  const handleClick = async () => {
    try {
      const persons = await window.lib.getPersons();

      console.log(persons);
    } catch (e) {
      console.error(e);
    }
  };

  document.getElementById('run').addEventListener('click', handleClick);
})();
