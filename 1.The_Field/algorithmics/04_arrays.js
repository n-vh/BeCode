// print an array

function printArray(array) {
  for (const el of array) {
    const isObject = typeof el === 'object';
    console.log(isObject ? JSON.stringify(el) : el);
  }
}

// maximum

function printMaximum(array) {
  const max = Math.max(...array);
  console.log(max);
}

// minimum

function printMinimum(array) {
  const min = Math.min(...array);
  console.log(min);
}

// minimum position

function printMinimumIndex(array) {
  let min = array[0];
  let index = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      index = i;
    }
  }

  console.log(index);
}

// ordered array

function printIsAscending(array) {
  let isAscending = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      isAscending = false;
      break;
    }
  }

  console.log(isAscending);
}
