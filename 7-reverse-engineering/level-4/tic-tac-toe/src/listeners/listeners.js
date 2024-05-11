import { gameHandlers, resetHandlers } from '../handlers/handlers.js'

export const eventListeners = () => {
    const tdElements = document.querySelectorAll('td')
    tdElements.forEach(tdEl => {
        tdEl.addEventListener('click', gameHandlers)
    })
    document.getElementById('reset').addEventListener('click', resetHandlers)
}