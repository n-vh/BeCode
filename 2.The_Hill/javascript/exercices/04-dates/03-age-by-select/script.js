(() => {
  const calculateAge = (day, month, year) => {
    const date = new Date(year, month - 1, day);
    const dateDiff = new Date() - date;

    const daysDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    const yearsDiff = Math.floor(daysDiff / 365.25);

    return yearsDiff;
  };

  document.getElementById('run').addEventListener('click', () => {
    const day = document.getElementById('dob-day').value;
    const month = document.getElementById('dob-month').value;
    const year = document.getElementById('dob-year').value;

    const age = calculateAge(day, month, year);

    alert(`You are ${age} years old! 🥳`);
  });
})();
