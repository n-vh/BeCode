(() => {
  class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }

    get name() {
      return `${this.firstname} ${this.lastname}`;
    }

    set name(name) {
      const [firstname, lastname] = name.split(/\s/);
      this.firstname = firstname;
      this.lastname = lastname;
    }
  }
  document.getElementById('run').addEventListener('click', () => {
    const person = new Person('Nils', 'Van Hée');
    console.log(person.name);

    person.name = 'Tim Cook';
    console.log(person.name);
  });
})();
