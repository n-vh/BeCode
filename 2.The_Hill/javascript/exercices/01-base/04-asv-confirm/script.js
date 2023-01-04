(() => {
  do {
    const name = prompt("What's your name?");
    const age = prompt('What about your age?');
    const gender = prompt('And you gender?');

    var confirmed = confirm(
      `Are you sure about all this information?\n
        Name: ${name}\n
        Age: ${age}\n
        Gender: ${gender}
      `,
    );
  } while (!confirmed);
})();
