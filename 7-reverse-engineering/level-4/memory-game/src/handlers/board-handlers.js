
import { revealNum } from '../logic/utils.js'

let isRevealed = false;

export const revealNumHandler = (event) => {
    isRevealed = true;
    const target = event.currentTarget;
    revealNum(target, isRevealed);
};

export const hideNumHandler = (event) => {
    isRevealed = false;
    const target = event.currentTarget;
    revealNum(target, isRevealed);
};

export const clickedHandler = (event) => {
    const target = event.currentTarget;
    revealNum(target, isRevealed);
    target.removeEventListener('mouseleave', hideNumHandler);
    target.setAttribute('data-selected', 'yes')
};

