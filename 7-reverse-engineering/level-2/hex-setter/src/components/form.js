import { createDiv } from './div.js'

export const createForm = () => {
    const formContainer = document.getElementById('user-interface');
    // console.log(formContainer)
    const formEl = document.createElement('form');
    formEl.id = "hex-value";
    formEl.classList.add('inputs')
    const h2El = document.createElement('h2');
    h2El.innerHTML = 'Select a hex code:';
    formEl.appendChild(h2El);
    formContainer.appendChild(formEl);
    const divEl = createDiv();
    formEl.appendChild(divEl);
    return formEl;
};
