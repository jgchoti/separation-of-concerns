import { saveNoCopies } from './util.js';
import { state } from '../data/state.js';

export const saveNoCopiesHandler = () => {
    const input = prompt('enter a string to save')
    if (state.includes(input)) {
        alert(`a string ${input} is already saved`)
    } else if (input !== null || input !== "") {
        state.push(input)
    }
    if (state.length > 0) {
        const message = saveNoCopies(state)
        alert(message)
    }

}
