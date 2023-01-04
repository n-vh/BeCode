(() => {
  document.getElementById('run').addEventListener('click', () => {
    const password = document.getElementById('pass-one');
    const confirmation = document.getElementById('pass-two');

    if (password.value !== confirmation.value) {
      password.style.borderColor = 'red';
      confirmation.style.borderColor = 'red';
    }
  });
})();
