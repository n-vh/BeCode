(() => {
  const handleClick = () => {
    window.lib.getPosts((error, posts) => {
      for (const post of posts) {
        window.lib.getComments(post.id, (error, comments) => {
          post.comments = comments;
          console.log(post);
        });
      }
    });
  };

  document.getElementById('run').addEventListener('click', handleClick);
})();
