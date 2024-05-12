import { changeBackground } from "../logic/util.js"

export const changeBackgroundHandler = (event) => {
    const selectedColor = event.target.value
    changeBackground(selectedColor)
}