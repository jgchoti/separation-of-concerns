import { changeStyleHandler } from '../handlers/handlers.js'

export const eventListeners = () => {
    document.getElementById('editor').addEventListener('change', changeStyleHandler)
    const selectEls = document.querySelectorAll('select')
    selectEls.forEach(selectEl => { selectEl.addEventListener('change', changeStyleHandler) })
}