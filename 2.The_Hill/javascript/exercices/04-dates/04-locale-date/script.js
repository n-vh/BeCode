(() => {
  const element = document.getElementById('target');
  const date = new Date();

  const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  const months = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  ];

  const dayName = days[date.getDay() - 1];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const time = `${date.getHours()}h${date.getMinutes()}`;

  element.innerHTML = `${dayName} ${day} ${monthName} ${year}, ${time}`;
})();
