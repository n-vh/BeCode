// concatenation

function concatenate(a, b) {
  return a + b;
}

// lowercase

function printLowerCase(a) {
  console.log(a.toLowerCase());
}

// uppercase

function printUpperCase(a) {
  console.log(a.toUpperCase());
}

// convert name

function convertName(a) {
  const [last, first] = a.split(', ');
  return `${first} ${last}`;
}

//  whitespace

function removeWhitespace(a) {
  return a.replace(/\s+/g, ' ');
}
