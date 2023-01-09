(() => {
  const element = document.getElementById('target');
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  const sayHello = hours < 17 || (hours === 17 && minutes < 30);
  element.innerHTML = sayHello ? 'Hello!' : 'Good Evening!';
})();
