import { changeBackgroundHandler } from "../handlers/handlers.js"

export const eventListener = () => {
    document.getElementById('new-color').addEventListener('change', changeBackgroundHandler)
}