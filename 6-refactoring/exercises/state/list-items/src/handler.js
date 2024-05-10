import { list } from './util.js';
import { bulletPoint } from '../data/constants.js';
import { arrayOfInput } from '../data/state.js';

export const listHandler = () => {
    let acceptingInput = true;
    while (acceptingInput) {
        const input = prompt('enter a list item');
        if (input === null) {
            acceptingInput = false;
            continue;
        } else {
            arrayOfInput.push(input);
        }
    }

    if (arrayOfInput.length > 0) {
        const lists = list(arrayOfInput, bulletPoint);
        const message = `all items:${lists}`;
        alert(message);
    }
};