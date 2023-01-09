(() => {
  const handleClick = async () => {
    const posts = await window.lib.getPosts();

    for (const post of posts) {
      const comments = await window.lib.getComments(post.id);
      post.comments = comments;

      console.log(post);
    }
  };

  document.getElementById('run').addEventListener('click', handleClick);
})();
