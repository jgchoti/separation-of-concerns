import { formatCoordinates } from './util.js';

export const showMouseCoordinates = (event) => {
    const text = document.getElementById('mouse-position');
    const xValue = event.movementX;
    const yValue = event.movementY;
    let result = formatCoordinates(xValue, yValue); // Assuming formatCoordinates is defined elsewhere
    text.innerHTML = result;
};