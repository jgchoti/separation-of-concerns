'use strict';

const inputEl = document.createElement('input')
inputEl.className = 'auth-field'
inputEl.placeholder = 'enter your username'

// the assertions are correct!  write code above to pass them
console.assert(inputEl.nodeName === 'INPUT', 'Test 1: nodeName');
console.assert(
  inputEl.placeholder === 'enter your username',
  'Test 2: placeholder',
);
console.assert(inputEl.className === 'auth-field', 'Test 3: className');
