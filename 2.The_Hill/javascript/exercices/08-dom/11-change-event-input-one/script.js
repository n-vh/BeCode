(() => {
  const element = document.getElementById('pass-one');
  const counter = document.getElementById('counter');

  element.addEventListener('input', () => {
    const count = element.value.length;

    if (count >= 10) {
      element.disabled = true;
    }

    counter.innerHTML = `${count}/10`;
  });
})();
