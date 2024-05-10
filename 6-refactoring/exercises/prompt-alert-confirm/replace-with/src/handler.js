import { replaceWith } from './util.js';

export const replaceWithHandler = () => {

    const string = prompt('enter a string to be edited')
    if (string === null || string === "") {
        alert('Good Bye!')
        return
    }

    const oldChar = prompt('enter a character to replace');
    if (!oldChar || oldChar.length !== 1) {
        alert('Please enter a single character.');
        return;
    }
    if (!string.includes(oldChar)) {
        alert(`Can't find ${oldChar} in ${string}`)
        return
    }
    const newChar = prompt(`enter a character to replace "${oldChar}"`);
    if (!newChar || newChar.length !== 1) {
        alert('Please enter a single character.');
        return;
    }


    const output = replaceWith(string, oldChar, newChar)
    const message = `Original String: ${string}\nModified String: ${output}`
    alert(message)
}




