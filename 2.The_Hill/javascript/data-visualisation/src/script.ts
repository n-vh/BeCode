import { ChartConfiguration, ChartDataset, ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';

const chartOptions: ChartOptions = {
  animation: {
    duration: 100,
  },
  aspectRatio: 1,
  elements: {
    line: {
      tension: 0.5,
      borderWidth: 2,
    },
  },
  responsive: true,
  scales: {
    y: {
      type: 'logarithmic',
    },
  },
};

function getTarget(selector: string) {
  const target = document.querySelector(selector)!;
  const canvas = document.createElement('canvas');
  target.insertAdjacentElement('beforebegin', canvas);
  return {
    target,
    insertChart: (options: ChartConfiguration) => {
      return new Chart(canvas, options);
    },
  };
}

function insertCrimesChart() {
  const { target, insertChart } = getTarget('#table1');
  const headers = target.querySelectorAll('tbody th');
  const cells = target.querySelectorAll('tbody td');

  const labels: string[] = [];
  const datasets: ChartDataset<'line'>[] = [];

  for (let i = 0; i < headers.length; i++) {
    const header = headers[i].textContent!;

    if (header.length === 4) {
      labels.push(header);
    }
  }

  let rowIndex = -1;

  for (let i = 0; i < cells.length; i++) {
    const columnIndex = i % 12;
    const cellText = cells[i].textContent!.replace(/\([⁰¹²³⁴⁵⁶⁷⁸⁹]\)/, '');

    if (columnIndex === 0) {
      rowIndex += 1;

      datasets.push({
        label: cellText,
        data: [],
      });
    } else {
      const number = cellText.replace(',', '.');
      datasets[rowIndex].data.push(Number(number));
    }
  }

  insertChart({
    type: 'line',
    data: {
      labels,
      datasets,
    },
    options: chartOptions,
  });
}

function insertHomicidesChart() {
  const { target, insertChart } = getTarget('#table2');
  const headers = target.querySelectorAll('thead th');
  const cells = target.querySelectorAll('tbody td');

  const labels: string[] = [];
  const datasets: ChartDataset<'bar'>[] = [];

  for (let i = 0; i < headers.length; i++) {
    const headerIndex = i % 4;
    const header = headers[i];

    switch (headerIndex) {
      case 2:
      case 3:
        datasets.push({
          label: header.textContent!,
          data: [],
          categoryPercentage: 0.5,
        });
    }
  }

  for (let i = 0; i < cells.length; i++) {
    const columnIndex = i % 3;
    const cell = cells[i];

    switch (columnIndex) {
      case 0:
        labels.push(cell.textContent!);
        continue;
      case 1:
      case 2:
        const number = cell.textContent!;
        datasets[columnIndex - 1].data.push(Number(number));
    }
  }

  insertChart({
    type: 'bar',
    data: {
      labels,
      datasets,
    },
    options: chartOptions,
  });
}

insertCrimesChart();
insertHomicidesChart();
