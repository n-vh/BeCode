(() => {
  const target = document.getElementById('target');
  const button = document.getElementById('increment');

  const getLocalStorage = () => {
    const value = localStorage.getItem('counter');
    return value !== null ? value : target.innerHTML;
  };

  const setLocalStorage = (value) => {
    localStorage.setItem('counter', value);
  };

  target.innerHTML = getLocalStorage();

  button.addEventListener('click', () => {
    let value = Number(target.innerHTML);
    value += 1;

    target.innerHTML = value;
    setLocalStorage(value);
  });
})();
