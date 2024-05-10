import { getNewColorHandler } from '../handlers/handler.js'
import { startup } from '../handlers/handler.js'
window.addEventListener("load", startup);
document.getElementById('new-color').addEventListener("input", getNewColorHandler)
document.getElementById('new-color').addEventListener("change", getNewColorHandler)
