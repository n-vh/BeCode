const toNumber = (n) => {
  const number = Number(n);
  return !Number.isNaN(number) ? number : 0;
};

(() => {
  document.getElementById('addition').addEventListener('click', () => {
    const one = document.getElementById('op-one').value;
    const two = document.getElementById('op-two').value;

    const result = toNumber(one) + toNumber(two);
    alert(result);
  });

  document.getElementById('substraction').addEventListener('click', () => {
    const one = document.getElementById('op-one').value;
    const two = document.getElementById('op-two').value;

    const result = toNumber(one) - toNumber(two);
    alert(result);
  });

  document.getElementById('multiplication').addEventListener('click', () => {
    const one = document.getElementById('op-one').value;
    const two = document.getElementById('op-two').value;

    const result = toNumber(one) * toNumber(two);
    alert(result);
  });

  document.getElementById('division').addEventListener('click', () => {
    const one = document.getElementById('op-one').value;
    const two = document.getElementById('op-two').value;

    const result = toNumber(one) / toNumber(two);
    alert(result);
  });
})();
