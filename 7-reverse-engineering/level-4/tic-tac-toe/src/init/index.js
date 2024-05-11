// this file is the program's Entry Point
import { board } from '../components/board.js'
import { button } from '../components/button.js'
import { eventListeners } from '../listeners/listeners.js'
window.addEventListener('load', () => {
    board()
    button()
    eventListeners()
})