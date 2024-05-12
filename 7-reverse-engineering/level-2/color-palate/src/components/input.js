
export const input = () => {
    const container = document.getElementById('user-interface')
    const inputEl = document.createElement('input')
    inputEl.setAttribute('type', 'color')
    inputEl.setAttribute('id', 'new-color')
    inputEl.classList.add('color-selection')
    container.appendChild(inputEl)
    return inputEl
}