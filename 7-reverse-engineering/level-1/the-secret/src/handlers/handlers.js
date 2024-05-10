import { changeColor } from '../logic/utils.js';

let isRevealed;

export const revealSecretHandler = (event) => {
    const target = event.currentTarget
    isRevealed = true;
    changeColor(target, isRevealed);
}


export const unRevealSecretHandler = (event) => {
    const target = event.currentTarget
    isRevealed = false;
    changeColor(target, isRevealed);
}