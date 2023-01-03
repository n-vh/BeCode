// calculate

function sum(a, b) {
  return a + b;
}

function division(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

// concatenate sentence

function concatenate(a, b) {
  return `${a} ${b}`;
}

// VAT

function addVat(price, rate = 21) {
  const amount = price * (rate / 100);
  return price + amount;
}

// surface of a circle

function calculateSurface(radius) {
  return Math.PI * Math.pow(radius, 2);
}

// conversion of time to seconds

function secondsSinceMidnight(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}
