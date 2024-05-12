import { castTheValue } from './handler.js';

export const eventlistener = () => {
    document.getElementById('user-action').addEventListener("click", castTheValue)
    document.querySelector('select').addEventListener('change', castTheValue)
}