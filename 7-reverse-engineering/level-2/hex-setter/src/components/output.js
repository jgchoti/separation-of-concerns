export const createOutput = () => {
    const userInterface = document.getElementById('user-interface');
    const codeEl = document.createElement('code');
    codeEl.id = "new-style";
    codeEl.classList.add('output')
    userInterface.appendChild(codeEl);
    return codeEl;
};
