import { changeColor } from '../logic/utils.js';
import { defaultColor } from '../data.js';
import { changeText } from '../logic/utils.js';

export const changeColorHandler = () => {
    const selectElements = document.querySelectorAll('select');
    let hexValue = ''
    selectElements.forEach(selectEl => {
        hexValue += selectEl.value
    });
    changeColor(hexValue)
    changeText(hexValue)

}

export const startup = () => {
    changeColor(defaultColor)
    changeText(defaultColor)
}