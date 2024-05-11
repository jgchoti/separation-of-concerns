
export const button = () => {
    const container = document.getElementById('user-interface')
    const buttonEl = document.createElement('button')
    buttonEl.id = 'reset-button'
    buttonEl.innerHTML = 'reset-button'
    container.appendChild(buttonEl)
    return buttonEl
}