export const createOutput = () => {
    const container = document.getElementById('user-interface')
    const codeEl = document.createElement('code')
    container.appendChild(codeEl)
    codeEl.id = 'program-output'
    return codeEl
}