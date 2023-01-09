(() => {
  do {
    var name = prompt('Enter your first name');
    if (name) {
      alert(`Hello, ${name}`);
    }
  } while (!name);
})();
