(() => {
  const source = document.getElementById('source');
  const target = document.getElementById('target');

  const image = document.createElement('img');
  image.src = source.getAttribute('data-image');
  target.appendChild(image);

  source.remove();
})();
