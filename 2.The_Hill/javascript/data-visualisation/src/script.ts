import { ChartDataset } from 'chart.js';
import Chart from 'chart.js/auto';

function insertCrimesChart() {
  const table = document.getElementById('table1') as HTMLTableElement;
  const chart = document.createElement('canvas');
  const rows = table.querySelectorAll('tbody tr');

  const labels: string[] = [];
  const datasets: ChartDataset<'line'>[] = [];

  rows.forEach((row, rowIndex) => {
    // first row is the labels
    if (rowIndex === 0) {
      row.childNodes.forEach((year) => {
        const text = year.textContent;
        if (text?.length === 4) {
          labels.push(text);
        }
      });

      // return to continue loop
      return;
    }

    const columns = row.querySelectorAll('td');
    const data: number[] = [];

    columns.forEach((column, columnIndex) => {
      // first column is the country names
      if (columnIndex === 0) {
        datasets.push({
          label: column.textContent!,
          data: [],
        });

        // return to continue loop
        return;
      }

      // convert the string to an actual number
      const number = column.textContent!.replace(',', '.');
      data.push(Number(number));
    });

    Object.assign(datasets[rowIndex - 1], {
      data,
    });
  });

  new Chart(chart, {
    type: 'line',
    data: {
      labels,
      datasets,
    },
    options: {
      aspectRatio: 1,
      elements: {
        line: {
          tension: 0.5,
          borderWidth: 2,
        },
      },
      scales: {
        y: {
          type: 'logarithmic',
        },
      },
    },
  });

  table.parentNode!.insertBefore(chart, table);
}

insertCrimesChart();
