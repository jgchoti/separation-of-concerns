import { revealNumHandler, hideNumHandler, clickedHandler } from '../handlers/board-handlers.js'
import { resetHandler } from '../handlers/reset-handlers.js'

export const eventListeners = () => {
    const tdElements = document.querySelectorAll('td')
    tdElements.forEach(tdEl => {
        tdEl.addEventListener('click', clickedHandler)
        tdEl.addEventListener('mouseenter', revealNumHandler)
        tdEl.addEventListener('mouseleave', hideNumHandler)
    })
    document.getElementById('reset-button').addEventListener('click', resetHandler)
}