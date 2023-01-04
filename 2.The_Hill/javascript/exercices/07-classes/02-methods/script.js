(() => {
  class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }

    sayHello() {
      return `Hello, ${this.firstname} ${this.lastname}!`;
    }
  }

  document.getElementById('run').addEventListener('click', () => {
    const person = new Person('Nils', 'Van Hée');
    console.log(person.sayHello());
  });
})();
