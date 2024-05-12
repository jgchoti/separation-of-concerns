import { typeCaster } from './util.js';
import { output } from './output.js';
export const castTheValue = () => {
    const type = document.querySelector('select').value
    const input = document.querySelector('input').value
    const newValue = typeCaster(input, type)
    output(newValue)
};
