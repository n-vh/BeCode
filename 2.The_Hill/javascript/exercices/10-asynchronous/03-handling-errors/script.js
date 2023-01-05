(() => {
  const handleClick = () => {
    window.lib.getPersons((error, persons) => {
      if (error) {
        console.error(error);
        return;
      }

      console.log(persons);
    });
  };

  document.getElementById('run').addEventListener('click', handleClick);
})();
