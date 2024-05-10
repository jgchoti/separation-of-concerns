import { revealSecretHandler } from '../handlers/handlers.js'
import { unRevealSecretHandler } from '../handlers/handlers.js'

document.getElementById('the-secret').addEventListener('mouseenter', revealSecretHandler)
document.getElementById('the-secret').addEventListener('mouseleave', unRevealSecretHandler)