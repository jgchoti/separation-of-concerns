import { changeBackground } from '../logic/utils.js';
import { defaultColor } from '../../data.js'

export const getNewColorHandler = (event) => {
    const color = event.target.value;
    changeBackground(color);
};


export const startup = () => {
    changeBackground(defaultColor);
};