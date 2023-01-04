(() => {
  document.getElementById('run').addEventListener('click', () => {
    const password = document.getElementById('pass-one');
    const confirmation = document.getElementById('pass-two');

    if (password.value !== confirmation.value) {
      password.classList.add('error');
      confirmation.classList.add('error');
    }
  });
})();
