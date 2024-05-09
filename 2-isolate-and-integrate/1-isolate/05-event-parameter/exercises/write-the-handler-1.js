'use strict';

const buttonEl = document.createElement('button');
buttonEl.innerHTML = '12345';
console.log('initial button:', buttonEl.cloneNode(true));

// const reverseInnerHTMLHandler = (event) => {
//   if (buttonEl.innerHTML === '12345') {
//     buttonEl.innerHTML = '54321';
//   }else {
//     buttonEl.innerHTML = '12345';
//   }
// };


let isReversed = false;

const reverseInnerHTMLHandler = () => {
  if (isReversed) {
    buttonEl.innerHTML = '12345';
  } else {
    buttonEl.innerHTML = '54321';
  }
  isReversed = !isReversed;
};

buttonEl.addEventListener('click', reverseInnerHTMLHandler);

// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);
console.log('after 1st click:', buttonEl.cloneNode(true));
console.assert(buttonEl.innerHTML === '54321', 'Test 1: after first click');

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
console.log('after 2nd click:', buttonEl.cloneNode(true));
console.assert(buttonEl.innerHTML === '12345', 'Test 2: after second click');
