export const createTextarea = () => {
    const textareaContainer = document.getElementById('user-interface')
    const textareaEl = document.createElement('textarea')
    textareaEl.id = 'editor'
    textareaContainer.appendChild(textareaEl)
    return textareaEl
}