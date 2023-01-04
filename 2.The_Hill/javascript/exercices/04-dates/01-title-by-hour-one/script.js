(() => {
  const element = document.getElementById('target');
  const hours = new Date().getHours();

  const sayHello = hours < 18;
  element.innerHTML = sayHello ? 'Hello!' : 'Good Evening!';
})();
