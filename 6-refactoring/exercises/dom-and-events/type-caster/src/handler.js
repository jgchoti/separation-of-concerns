import { typeCaster } from './util.js';

export const castTheValue = () => {
    const type = document.querySelector('select').value
    const input = document.querySelector('input').value
    const output = document.getElementById('casted-value')
    output.innerHTML = typeCaster(input, type)

};
