import { formatCoordinates } from './util.js';
import { state } from '../data/state.js';
import { outputDisplay } from './output-display.js';

export const showMouseCoordinates = (event) => {
    state.xValue = event.pageX;
    state.yValue = event.pageY;
    let result = formatCoordinates(state.xValue, state.yValue);
    console.log(result)
    outputDisplay(result)
};