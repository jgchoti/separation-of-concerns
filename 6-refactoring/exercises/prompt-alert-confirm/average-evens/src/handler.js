import { averageEvens } from './util.js';

export const averageEvensHandler = () => {
    const allNumbers = [];
    let acceptingInput = true;
    while (acceptingInput) {
        const input = prompt('enter a number');
        if (input === null || input === '') {
            acceptingInput = false;
            continue;
        }
        const inputNumber = Number(input);
        if (Number.isNaN(inputNumber)) {
            alert(`"${input}" is not a valid number`);
            acceptingInput = false;
        } else {
            allNumbers.push(inputNumber);

        }
    }
    if (allNumbers.length !== 0) {
        const average = averageEvens(allNumbers)
        const message = `average of all evens: ${average} from ${allNumbers}`;
        alert(message);
    }

};



