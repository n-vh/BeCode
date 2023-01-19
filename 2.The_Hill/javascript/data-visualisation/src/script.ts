import { ChartDataset } from 'chart.js';
import Chart from 'chart.js/auto';

function insertCrimesChart() {
  const table = document.getElementById('table1') as HTMLTableElement;
  const parent = table.parentNode as HTMLElement;
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
        let country = column.textContent!;

        if (country.includes(')')) {
          country = country.substring(0, country.length - 3);
        }

        datasets.push({
          label: country,
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
      animation: false,
      scales: {
        y: {
          type: 'logarithmic',
        },
      },
    },
  });

  parent.insertBefore(chart, table);
}

insertCrimesChart();
