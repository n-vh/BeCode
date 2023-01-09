(() => {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  document.getElementById('run').addEventListener('click', () => {
    const skitty = new Cat('Skitty', 6);
    console.log(skitty);

    const pixel = new Cat('Pixel', 6);
    console.log(pixel);
  });
})();
