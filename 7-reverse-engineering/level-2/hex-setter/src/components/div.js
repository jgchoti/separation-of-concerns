import { values, selectNames } from '../data.js'

export const createDiv = () => {
    const divEl = document.createElement('div')
    const codeEl = document.createElement('code')
    codeEl.innerHTML = '#'
    divEl.appendChild(codeEl)
    for (const name of selectNames) {
        const selectEl = document.createElement('select')
        selectEl.name = name
        for (const item of values) {
            const optionEl = document.createElement('option')
            optionEl.value = item
            optionEl.innerHTML = item
            selectEl.appendChild(optionEl)
        }
        divEl.appendChild(selectEl)
    }
    return divEl;
};