(() => {
  const gallery = [
    '../../__shared__/img/bell.svg',
    '../../__shared__/img/clock.svg',
    '../../__shared__/img/compass.svg',
    '../../__shared__/img/lemon.svg',
    '../../__shared__/img/map.svg',
  ];

  let position = 0;

  document.getElementById('next').addEventListener('click', () => {
    const element = document.querySelector('img');

    if (position === gallery.length - 1) {
      position = 0;
    } else {
      position++;
    }

    element.src = gallery[position];
  });
})();
