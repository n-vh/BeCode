(() => {
  const element = document.getElementById('pass-one');
  const validity = document.getElementById('validity');

  element.addEventListener('input', () => {
    const password = element.value;
    const isLongEnough = password.length >= 8;
    const hasTwoNumbers = password.match(/\d/g).length >= 2;

    validity.innerHTML = isLongEnough && hasTwoNumbers ? 'ok' : 'Pas ok';
  });
})();
