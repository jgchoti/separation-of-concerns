import { changeStyle } from '../logic/change-style.js'

export const changeStyleHandler = () => {
    const input = document.getElementById('editor');
    const selectElements = document.querySelectorAll('select');
    let selectedStyle = []
    selectElements.forEach(selectEl => {
        selectedStyle.push(selectEl.value)
    });
    console.log(selectedStyle)
    const output = changeStyle(input, selectedStyle)
    return output
}