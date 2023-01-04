(() => {
  class Animal {
    sayHello() {
      return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
  }

  class Cat extends Animal {
    static greeting = 'Miaou';

    constructor(name) {
      super();
      this.name = name;
    }
  }

  class Dog extends Animal {
    static greeting = 'Wouf';

    constructor(name) {
      super();
      this.name = name;
    }
  }

  document.getElementById('run').addEventListener('click', () => {
    const cat = new Cat('Félix');
    console.log(cat.sayHello());

    const dog = new Dog('Max');
    console.log(dog.sayHello());
  });
})();
