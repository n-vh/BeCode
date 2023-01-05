(() => {
  const handleClick = () => {
    window.lib.getPosts().then((posts) => {
      console.log(posts);
    });
  };

  document.getElementById('run').addEventListener('click', handleClick);
})();
