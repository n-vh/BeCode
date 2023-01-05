(() => {
  const handleClick = () => {
    window.lib.getPosts((error, posts) => {
      console.log(posts);
    });
  };

  document.getElementById('run').addEventListener('click', handleClick);
})();
