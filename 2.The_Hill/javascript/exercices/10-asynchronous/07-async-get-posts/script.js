(() => {
  const handleClick = async () => {
    try {
      const posts = await window.lib.getPosts();

      console.log(posts);
    } catch (e) {
      console.error(e);
    }
  };

  document.getElementById('run').addEventListener('click', handleClick);
})();
