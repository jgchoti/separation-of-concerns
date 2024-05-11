import { substringHandler } from '../handlers/handlers.js'

export const eventListeners = () => {
    const inputEls = document.querySelectorAll('input')
    inputEls.forEach(inputEl => {
        inputEl.addEventListener('change', substringHandler)
    })
}