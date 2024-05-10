import { getNewColorHandler } from '../handlers/handler.js'
import { startup } from '../handlers/handler.js'
window.addEventListener("load", startup, false);
document.getElementById('new-color').addEventListener("input", getNewColorHandler, false)
document.getElementById('new-color').addEventListener("change", getNewColorHandler, false)
