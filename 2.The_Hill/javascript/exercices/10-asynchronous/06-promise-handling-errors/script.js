(() => {
  const handleClick = async () => {
    window.lib
      .getPersons()
      .then((persons) => {
        console.log(persons);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  document.getElementById('run').addEventListener('click', handleClick);
})();
