/**
 * ...
 */
import { shuffledNumbers } from '../logic/shuffled-numbers.js'

export const board = (x = 4, y = 4) => {
  const container = document.getElementById('user-interface')
  container.classList.add('centered')
  const divEl = document.createElement('div')
  divEl.id = 'board-container'

  const arrayOfNumbers = shuffledNumbers(x, y)

  // create a table with the random numbers
  const tableEl = document.createElement('table');

  for (let rowIndex = 0; rowIndex < y; rowIndex++) {
    const rowEl = document.createElement('tr');

    for (let columnIndex = 0; columnIndex < x; columnIndex++) {
      const cellEl = document.createElement('td');
      cellEl.dataset.selected = 'no';
      cellEl.className = 'hidden';
      cellEl.innerHTML = arrayOfNumbers.pop();

      rowEl.appendChild(cellEl);
    }
    tableEl.appendChild(rowEl);
  }
  divEl.appendChild(tableEl)
  container.appendChild(divEl)
  return divEl;
};
