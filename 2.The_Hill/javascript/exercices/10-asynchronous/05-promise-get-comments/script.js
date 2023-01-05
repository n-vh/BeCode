(() => {
  const handleClick = async () => {
    window.lib.getPosts().then((posts) => {
      for (const post of posts) {
        window.lib.getComments(post.id).then((comments) => {
          post.comments = comments;

          console.log(post);
        });
      }
    });
  };

  document.getElementById('run').addEventListener('click', handleClick);
})();
