// this file is the program's Entry Point
import { createForm } from "../components/form.js";
import { createOutput } from "../components/code.js";
import { eventListeners } from "../listeners/listeners.js";

window.addEventListener('load', () => {
    createForm()
    createOutput()
    eventListeners()
})
