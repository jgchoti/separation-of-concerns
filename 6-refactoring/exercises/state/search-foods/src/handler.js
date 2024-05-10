import { search } from './util.js';
import { state } from '../data/state.js';

export const searchFoodsHandler = () => {
    const input = prompt('enter a search query')
    if (input === null || input === '') {
        return;
    }
    const searchResult = search(state, input)
    const message = `foods matching "${input}": ${searchResult}`;
    alert(message);
};
