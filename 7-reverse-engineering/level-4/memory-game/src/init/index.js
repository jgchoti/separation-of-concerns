// this file is the program's Entry Point
import { button } from '../components/button.js'
import { board } from '../components/board.js'
import { eventListeners } from '../listeners/listeners.js'

window.addEventListener('load', () => {
    button()
    board()
    eventListeners()
})