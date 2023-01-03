// cinema rate

function getReducedPrice(isReduced) {
  if (isReduced) {
    return 8;
  } else {
    return 10;
  }
}

// maximum

function getMax(num1, num2, num3) {
  let max = num1;

  if (num2 > max) {
    max = num2;
  }

  if (num3 > max) {
    max = num3;
  }

  return max;
}

// identical dice

function getIdenticalCount(dice1, dice2, dice3) {
  let count = 0;

  if (dice1 === dice2 && dice2 === dice3) {
    count = 3;
  } else if (dice1 === dice2 || dice2 === dice3 || dice1 === dice3) {
    count = 2;
  }

  return count;
}

// day's number

function getDayName(day) {
  switch (day) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return 'Must be between 1 and 7';
  }
}

// print shop

function getPrintShopPrice(copies) {
  let price = 0;

  if (copies <= 10) {
    price = copies * 0.12;
  } else if (copies <= 20) {
    price = copies * 0.11;
  } else {
    price = copies * 0.1;
  }

  return price;
}
