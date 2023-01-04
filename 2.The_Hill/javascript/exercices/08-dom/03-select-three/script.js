(() => {
  const elements = document.querySelectorAll('.target');

  elements.forEach((element) => {
    element.innerHTML = 'owned';
  });
})();
