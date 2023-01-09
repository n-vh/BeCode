/**
 * @param {String|Number} n
 * @returns {Number} The parsed number, returns `0` if `NaN`.
 */
const toNumber = (n) => {
  const number = Number(n);
  return !Number.isNaN(number) ? number : 0;
};

/**
 * @param {Number} min
 * @param {Number} max
 * @returns {Number} A random number between `min` and `max`.
 */
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * @returns {String} A valid random hex color (like: `#69c35d`).
 */
const randomHexColor = () => {
  return '#' + randomNumber(0, 16777215).toString(16);
};

/**
 * @param {any[]} array
 * @returns {any} A random value in `array`.
 */
const randomInArray = (array) => {
  const random = randomNumber(0, array.length - 1);
  return array[random];
};

/**
 *
 * @param {Number} day
 * @param {Number} month
 * @param {Number} year
 * @returns {Number} The current age based on `day`, `month` and `year`.
 */
const calculateAge = (day, month, year) => {
  const date = new Date(year, month - 1, day);
  const dateDiff = new Date() - date;

  const daysDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  const yearsDiff = Math.floor(daysDiff / 365.25);

  return yearsDiff;
};

describe('toNumber', () => {
  it('returns valid number', () => {
    expect(toNumber('123')).toEqual(123);
    expect(toNumber(123)).toEqual(123);
    expect(toNumber('3.14')).toEqual(3.14);
    expect(toNumber(-10)).toEqual(-10);
  });

  it('returns 0 for invalid input', () => {
    expect(toNumber(null)).toEqual(0);
    expect(toNumber(undefined)).toEqual(0);
    expect(toNumber('')).toEqual(0);
    expect(toNumber('abc')).toEqual(0);
  });
});

describe('randomNumber', () => {
  it('returns random number within the specified range', () => {
    for (let i = 0; i < 100; i++) {
      const min = Math.floor(Math.random() * 100);
      const max = Math.floor(Math.random() * 100) + min;
      const result = randomNumber(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  });
});

describe('randomHexColor', () => {
  it('returns a valid hex color code', () => {
    const hexColor = randomHexColor();
    expect(hexColor).toMatch(/^#[0-9A-F]{6}$/i);
  });

  it('returns a different value every time it is called', () => {
    const set = new Set();
    for (let i = 0; i < 100; i++) {
      set.add(randomHexColor());
    }
    expect(set.size).toBe(100);
  });
});

describe('randomInArray', () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  it('returns a random value in the array', () => {
    const result = randomInArray(array);
    expect(array).toContain(result);
  });
});

describe('calculateAge', () => {
  it('returns the correct age based on the input date', () => {
    const day = 1;
    const month = 1;
    const year = 1980;
    const age = calculateAge(day, month, year);
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - year;
    expect(age).toEqual(expectedAge);
  });
});
