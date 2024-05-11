import { formElements } from "../data.js"
export const createForm = () => {
    const container = document.getElementById('user-interface')
    const formEl = document.createElement('form')
    formEl.id = 'user-input'
    for (const key in formElements) {
        const spanEl = document.createElement('span')
        spanEl.innerText = key + ': '
        const inputEl = document.createElement('input')
        for (const attribute in formElements[key]) {
            inputEl.setAttribute(attribute, formElements[key][attribute])
        }
        spanEl.appendChild(inputEl)
        formEl.appendChild(spanEl)
    }
    container.appendChild(formEl)
    return formEl
}