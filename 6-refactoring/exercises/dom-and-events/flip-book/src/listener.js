import { reverseAndUpperHandler } from './handler.js';
export const eventListener = () => {
    document.getElementById('input').addEventListener('keyup', reverseAndUpperHandler);
}