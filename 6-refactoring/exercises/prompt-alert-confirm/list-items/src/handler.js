import { list } from './utils.js';

export const listHandler = () => {
    const arrayOfInput = []
    const acceptingInput = true
    while (acceptingInput) {
        const input = prompt('enter a list item, cancel when your are done')
        if (input === null) {
            acceptingInput = false
            continue
        } else {
            arrayOfInput.push(input)
        }
    }
    if (arrayOfInput.length !== 0) {
        const listOfInput = list(arrayOfInput)
        alert(`all items:${listOfInput}`)
    }
};
