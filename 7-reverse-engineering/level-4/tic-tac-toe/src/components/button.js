// <button id="reset">reset board</button>
export const button = () => {
    const container = document.getElementById('user-interface')
    const buttonEl = document.createElement('button')
    buttonEl.setAttribute('id', 'reset')
    buttonEl.innerText = 'reset board'
    container.appendChild(buttonEl)
    return buttonEl
}