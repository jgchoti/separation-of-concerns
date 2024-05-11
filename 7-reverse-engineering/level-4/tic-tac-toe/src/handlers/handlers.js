import { message } from '../data.js';
import { IsXorO } from '../logic/utils.js';

let isFirstPlayer = true;

export const gameHandlers = (event) => {
    const target = event.currentTarget;
    if (target.innerHTML !== '') {
        alert(message);
        return;
    }
    const output = IsXorO(isFirstPlayer);
    isFirstPlayer = !isFirstPlayer;
    target.innerHTML = output;
};

export const resetHandlers = () => {
    const cellEls = document.querySelectorAll('td');
    cellEls.forEach((cellEl) => {
        cellEl.innerHTML = '';
    });
    isFirstPlayer = true;
};