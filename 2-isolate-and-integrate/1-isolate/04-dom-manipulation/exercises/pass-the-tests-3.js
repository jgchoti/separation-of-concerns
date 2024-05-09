'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr></tr>
      <tr></tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  you want to create a 2x2 table with a, b, c, d in the squares
// const array = [['a', 'b'],['c', 'd'] ];
// const tbodyEl = divEl.querySelector('tbody');

// for (let i = 0; i < tbodyEl.children.length && i < array.length; i++) {
//   const tr = tbodyEl.children[i];
//   const td1El = document.createElement('td');
//   const td2El = document.createElement('td');
//   tr.appendChild(td1El);
//   tr.appendChild(td2El);
//   for (let j = 0; j < tr.children.length; j++) {
//     const td = tr.children[j];
//     td.innerHTML = array[i][j];
//   }
// }
const array = [['a', 'b'],['c', 'd']];
const tbody = divEl.querySelector('tbody');

for (let i = 0; i < array.length; i++) {
  const tr = tbody.children[i];
  for (let j = 0; j < array[i].length; j++) {
    const td = document.createElement('td');
    tr.appendChild(td);
    td.innerHTML = array[i][j];
  }
}
// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
