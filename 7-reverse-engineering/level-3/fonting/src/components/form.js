import { elements } from '../data.js'
import { capitalizeFirst, capitalize } from '../logic/utils.js'

export const createForm = () => {
    const formContainer = document.getElementById('user-interface')
    formContainer.classList.add('interface')
    const formEl = document.createElement('form')
    formEl.id = 'user-input'
    for (const key in elements) {
        const spanEl = document.createElement('span')
        spanEl.innerText = `${capitalizeFirst(key)}  : `
        spanEl.classList.add('input')
        const selectEl = document.createElement('select')
        selectEl.name = key
        for (const item of elements[key]) {
            const optionEl = document.createElement('option')
            optionEl.value = item
            optionEl.innerHTML = item === 'bold' ? capitalize(item) : item === 'small' || item === 'none' ? item : capitalizeFirst(item)
            selectEl.appendChild(optionEl)
        }
        spanEl.appendChild(selectEl)
        formEl.appendChild(spanEl)
    }
    formContainer.appendChild(formEl)
    return formEl
}