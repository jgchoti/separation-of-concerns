
import { createForm } from '../components/form.js';
import { createOutput } from '../components/output.js';
import { eventListeners } from '../listeners/listeners.js';
import { startup } from '../handlers/handlers.js';

window.addEventListener("load", () => {
    createForm();
    createOutput()
    startup()
    eventListeners();

});