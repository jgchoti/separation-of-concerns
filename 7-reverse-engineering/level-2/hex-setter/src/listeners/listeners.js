import { changeColorHandler } from '../handlers/handlers.js';

export const eventListeners = () => {
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(selectEl => {
        selectEl.addEventListener('change', changeColorHandler);
    });
};

