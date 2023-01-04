(() => {
  const calculateAge = (day, month, year) => {
    const date = new Date(year, month - 1, day);
    const dateDiff = new Date() - date;

    const daysDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    const yearsDiff = Math.floor(daysDiff / 365.25);

    return yearsDiff;
  };

  document.getElementById('run').addEventListener('click', () => {
    const dayElement = document.getElementById('dob-day');
    const monthElement = document.getElementById('dob-month');
    const yearElement = document.getElementById('dob-year');

    const day = dayElement.options[dayElement.selectedIndex].value;
    const month = monthElement.options[monthElement.selectedIndex].value;
    const year = yearElement.options[yearElement.selectedIndex].value;

    const age = calculateAge(day, month, year);

    alert(`You are ${age} years old! 🥳`);
  });
})();
