// print numbers

function printNumbers(n) {
  console.log('Numbers from 1 to n');
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  console.log('Numbers from 1 to n in descending order');
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }

  console.log('Numbers from -n to n');
  for (let i = -n; i <= n; i++) {
    console.log(i);
  }

  console.log('Odd numbers from 1 to n');
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// even numbers

function printEvenNumbers(n) {
  for (let i = 0; i <= n; i += 2) {
    console.log(i);
  }
}

// print random number of integers

function printZeroToRandom(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

// throw dices

function throwDice(throws, number) {
  let count = 0;

  for (let i = 0; i < throws; i++) {
    const random = randomInt(6);

    if (random === number) {
      count++;
    }
  }

  return count;
}

// perfect number

function isPerfectNumber(n) {
  let number = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      number += i;
    }
  }

  return number === n;
}

function randomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
