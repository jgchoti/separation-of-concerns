import { reverseAndUpper } from './util.js';

export const reverseAndUpperHandler = () => {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');
    let result = reverseAndUpper(input)
    output.innerHTML = result
}
