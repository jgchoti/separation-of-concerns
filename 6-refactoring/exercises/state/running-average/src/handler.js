import { average } from './util.js';
import { state } from '../data/state.js';

export const runningAverageHandler = () => {
    const input = prompt('add a number to the running average')
    let inputToNumber = Number(input)
    if (Number.isNaN(inputToNumber)) {
        alert(`"${input}" is not a number`)
    } else {
        state.push(inputToNumber)
    }
    if (state.length > 0) {
        const runningAverage = average(state)
        alert(`running average: ${runningAverage}`)
    }
};
