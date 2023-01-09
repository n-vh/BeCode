(() => {
  const element = document.querySelector('img');
  element.addEventListener('mouseover', () => {
    const source = element.getAttribute('data-hover');
    element.src = source;
  });
})();
