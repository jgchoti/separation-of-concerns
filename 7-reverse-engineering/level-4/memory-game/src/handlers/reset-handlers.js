import { shuffledNumbers } from '../logic/shuffled-numbers.js'
import { eventListeners } from '../listeners/listeners.js'

export const resetHandler = () => {
    const arrayOfNumber = shuffledNumbers(4, 4)
    const cellEls = document.querySelectorAll('td')
    cellEls.forEach((cellEl, index) => {
        cellEl.innerHTML = arrayOfNumber[index]
    })
    eventListeners()
}