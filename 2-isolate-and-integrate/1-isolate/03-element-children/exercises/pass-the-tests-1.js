'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <li>Frog</li>
  <li>salad</li>
`;
console.log(ulEl.nodeName, ulEl.cloneNode(true));

// --- write some code ---

// use Array.from

// const childrenArray = Array.from(ulEl.children);
// childrenArray[2].innerHTML = 'Salamander'
// childrenArray.forEach((child) => {
//   child.innerHTML = child.innerHTML.toLowerCase().trim();
// });

// use For Loop
ulEl.children[2].innerHTML = 'Salamander'
for (const child of ulEl.children) {
  child.innerHTML = child.innerHTML.toLowerCase().trim()
}
// --- --- --- --- --- ---

console.log(ulEl.nodeName, ulEl.cloneNode(true));

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actual = ulEl.children[i].innerHTML;
  const expected = expectedInnerHTMLs[i];
  console.assert(actual === expected, `Test child ${i}`);
}
