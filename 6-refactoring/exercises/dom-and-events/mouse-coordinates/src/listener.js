import { showMouseCoordinates } from './handler.js';

export const eventlistener = () => { document.getElementById('user-interface').addEventListener('mousemove', showMouseCoordinates) }
