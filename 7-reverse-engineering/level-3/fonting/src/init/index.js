// this file is the program's Entry Point

import { createForm } from '../components/form.js';
import { createTextarea } from '../components/textarea.js';
import { eventListeners } from '../listeners/listeners.js';


window.addEventListener("load", () => {
    createForm();
    createTextarea()
    eventListeners()


});
